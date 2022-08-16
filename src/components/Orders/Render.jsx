import ReactPDF, { Page, renderToFile, Text, View, Document, StyleSheet, PDFViewer, pdf, renderToString, BlobProvider, usePDF } from "@react-pdf/renderer";
import axios from "axios";
import { useEffect, useRef } from "react";
import { OrderDetail } from "./OrderDetail";

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});





export function Render() {
    const a = 
    <PDFViewer >
        <Document>
            <Page>
                <View >
                    <Text>Section #1</Text>
                </View>
                <View >
                    <Text>Section #2</Text>
                </View>
            </Page>
        </Document>
    </PDFViewer>
    // const pf = useRef()
    // console.log(pf)

    // useEffect(() => {
    //     console.log(document.getElementById('pdf'))
    //     const b = new FormData()
    //     b.append('asd', pf.renderToString)
    //     console.log(b)

    //     axios.post('http://localhost:3001/api/v1/orders/send', {
    //         instance: JSON.stringify(document.getElementById('pdf'))

    //     })
    //     return () => {
    //     }
    // }, [])

    const [instance, updateInstance] = usePDF({ document: a });


    if (instance.url) {
        console.log(instance)
        let formData = new FormData();
        formData.append('customFile', instance.url);
        axios.post('http://localhost:3001/api/v1/orders/send', formData, { headers: {"Content-type": "multipart/form-data", }, })
            .then(res => { console.log(`Success` + res.data); }).catch(err => { console.log(err); })
    }



    return (
        <div id='pdf'>
            <PDFViewer >
                <Document>
                    <Page>
                        <View >
                            <Text>Section #1</Text>
                        </View>
                        <View >
                            <Text>Section #2</Text>
                        </View>
                    </Page>
                </Document>
            </PDFViewer>
        </div>
    );

}


