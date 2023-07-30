import classes from './classes_data.json';

var count = -1;

function renderClass(c){
    count++;
    if(c.code) return <li key={count}>{c.name} ({c.code})</li>;
    else return <li key={count}>{c.name}</li>;
}

function renderSemester(sem){
    return <>
        <div key={count}>
            <h6>{sem.semester}</h6>
            <ul>
                {sem.courses.map(c => renderClass(c))}
            </ul>
        </div>
        
    </>
}

function Classes(){
    return (
        <>
            <h4>Current Classes</h4>
            {renderSemester(classes.current)}
            <h4>Previous Classes</h4>
            {classes.previous.map(s => renderSemester(s))}
        </>
    );
}

export default Classes;