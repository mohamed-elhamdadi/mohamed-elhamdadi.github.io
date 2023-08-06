import { useState, useEffect } from 'react';
import $ from 'jquery'

function arxiv_search({all, author, title, abstrct, journal_ref}) {
    var baseUrl = "http://export.arxiv.org/api/query?search_query=";
    var first = true;
    
    if (author) {
	if (!first) {
	    baseUrl += '+AND+';
	}
	baseUrl += "au:" + author;
	first = false;
    }
    
    if (title) {
	if (!first) {
	    baseUrl += '+AND+';
	}
	baseUrl += "ti:" + title;
	first = false;
    }
    
    if (abstrct) {
	if (!first) {
	    baseUrl += '+AND+';
	}
	baseUrl += "abs:" + abstrct;
	first = false;
    }
    
    if (all) {
	if (!first) {
	    baseUrl += '+AND+';
	}
	baseUrl += "all:" + all;
    }
    baseUrl += '&max_results=30'

    console.log(baseUrl)

    var deferred = $.Deferred();
    $.ajax({
        url: baseUrl,
        type: "get",
        crossDomain: true,
        headers: {
            'Accept': 'application/json'
        },
        beforeSend: function(xhr){
                xhr.withCredentials = true;
        },
        dataType: "xml",
        success: function(xml) {
	    var entry = [];
	    $(xml).find('entry').each(function (index) {
		var id = $(this).find('id').text();
		var pub_date = $(this).find('published').text();
		var title = $(this).find('title').text();
		var summary = $(this).find('summary').text();
		var authors = [];
		$(this).find('author').each(function (index) {
		    authors.push($(this).text());
		});
		
		entry.push({'title': title,
			    'link': id,
			    'summary': summary,
			    'date': pub_date,
			    'authors': authors
			   });
	    });
	    
	    deferred.resolve(entry);
        },
        error: function(status) {
            console.log("request error " + status + " for url: "+baseUrl);
        }
    });
    return deferred.promise();
}

function Research(){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        arxiv_search({author:'Elhamdadi+Mohamed'}).done(
            res => {
                let data = res.sort((a,b) => new Date(b.date)-new Date(a.date))

                setPosts(data.map(d => {
                    return (
                        <>
                            <li>
                                <h6>{d.authors.join(',  ')}. <b>{d.title}</b></h6>
                                <a target="_" href={d.link}>Link to article</a>
                                <p></p>
                                <h6><b>Abstract:</b> {d.summary.replace(/otimes/g,'x').replace(/rightarrow/g,'->').replace(/mathk/g,'').replace(/mathbb/g,'').replace(/mathbf/g,'').replace(/alpha/g,'a').replace(/beta/g,'b').replace(/\\/g,'').replace(/\$/g,'').replace(/\{/g,'').replace(/\}/g,'').replace(/\[/g,'').replace(/\]/g,'')}</h6>
                            </li>
                        </>
                    );
                }))
            }
                
        )
    }, [])

    return (
        <>
            <ol>{posts}</ol>
        </>
    )
}

export default Research;