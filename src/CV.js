import { useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import { Row, Col } from 'react-bootstrap';
import cv_pdf from './cv.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url
).toString()

function CV(){
    const [numPages, setNumPages] = useState();

    function onDocumentLoadSuccess({numPages}) {
        console.log(numPages)
        setNumPages(numPages);
    }

    return <>
        <Row>
            <Col>
                <Document file={cv_pdf} onLoadSuccess={onDocumentLoadSuccess}>
                    {Array.from(new Array(numPages), (el, index) => (
                        <Page key={`page_${index+1}`} pageNumber={index+1} renderTextLayer={false} renderAnnotationLayer={false}/>
                    ))}
                </Document>
            </Col>
        </Row>
    </>
}

export default CV;