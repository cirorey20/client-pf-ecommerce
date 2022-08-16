import React, { useEffect } from 'react';
import ReactPDF, { Page, Text, View, Document, StyleSheet, Image, PDFViewer } from '@react-pdf/renderer';
import img from './Universal-Pictures-Logo.png';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { detailOrder } from '../../redux/actions/orders';
import { useParams } from 'react-router-dom';

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        color: 'gray',
        backgroundColor: 'white',
    },
    logo: {
        width: '40vw',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: '20px'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
        // backgroundColor: 'red'
    },
    subtitle: {
        fontSize: '15px',
        color: 'gray',
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    paimentInfo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '20px',
        fontSize: '12px',
        fontWeight: 'light',
        flexWrap: 'wrap',
    },
    paimentInfoItem: {
        marginTop: '10px',
    },
    tableProducts: {
        marginTop: '20px',
        display: 'table',
        width: 'auto',
        backgroundColor: '#e9ecef',
        borderRadius: '10px',
        textAlign: 'center'
    },
    columnBody10: {
        width: '10%'
    },
    columnBody30: {
        width: '30%'
    },
    columnBody40: {
        width: '40%'
    },
    columnHeader10: {
        width: '10%',
        borderBottom: '0.3px solid gray'
    },
    columnHeader30: {
        width: '30%',
        borderBottom: '0.3px solid gray'
    },
    columnHeader40: {
        width: '40%',
        borderBottom: '0.3px solid gray'
    },
    columnFooterItems: {
        width: '60%',
        borderTop: '0.3px solid gray'
    },
    columnFooterTotal: {
        width: '40%',
        borderTop: '0.3px solid gray'
    },
    // itemHeader: {
    //     margin: '5px'
    // },
    itemRow: {
        margin: 'auto',
        flexDirection: 'row'
    },
    headerCell: {
        margin: '5px',
        fontSize: '12px',
        fontWeight: 'bold'
    },
    bodyCell: {
        margin: '5px',
        fontSize: '10px'
    },
    footerCell: {
        margin: '5px',
        fontSize: '15px',
        fontWeight: 'bold'
    }

});
export function OrderDetail() {

    const dispatch = useDispatch();
    const { orderDetail } = useSelector(state => state.ordersReducer);
    const { idOrder } = useParams();

    useEffect(() => {
        dispatch(detailOrder(idOrder));
    }, [dispatch]);


    if (Object.keys(orderDetail).length === 0) return (<p>Order not found</p>)

    console.log(orderDetail.ProductOrders.length)
    return (
        <PDFViewer style={{ height: "100vh", width: "100%" }} >
            <Document title={orderDetail.id} author='universal music' subject='Receipt' >
                <Page size="A4" style={styles.page} orientation='landscape'>
                    <View style={styles.section}>
                        <View>
                            <ReactPDF.Image src={img} style={styles.logo} />
                        </View>
                        <Text style={styles.subtitle}>Receipt #{orderDetail.id}</Text>
                        <View style={styles.paimentInfo}>
                            <View style={styles.paimentInfoItem}>
                                <Text>CLIENT</Text>
                                <Text>{`${orderDetail.User.name} ${orderDetail.User.last_name}`}</Text>

                            </View>
                            <View style={styles.paimentInfoItem}>
                                <Text>EMAIL</Text>
                                <Text>{orderDetail.User.email}</Text>
                            </View>
                            <View style={styles.paimentInfoItem}>
                                <Text>PAYMENT METHOD</Text>
                                <Text>Visa - 3155</Text>
                            </View>

                            <View style={styles.paimentInfoItem}>
                                <Text>DATE PAID</Text>
                                <Text>{orderDetail.date}</Text>
                            </View>

                        </View>

                        {/* Table Products */}
                        <View style={styles.tableProducts}>
                            {/* Header */}
                            <View style={styles.itemRow}>
                                <View style={styles.columnHeader30}>
                                    <Text style={styles.headerCell}>Product</Text>
                                </View>
                                <View style={styles.columnHeader40}>
                                    <Text style={styles.headerCell}>Description</Text>
                                </View>
                                <View style={styles.columnHeader10}>
                                    <Text style={styles.headerCell}>Quantity</Text>
                                </View>
                                <View style={styles.columnHeader10}>
                                    <Text style={styles.headerCell}>Unit price</Text>
                                </View>
                                <View style={styles.columnHeader10}>
                                    <Text style={styles.headerCell}>Total price</Text>
                                </View>
                            </View>
                            {/* Body */}
                            {
                                orderDetail.ProductOrders.map(p => (

                                    <View key={p.id} style={styles.itemRow}>
                                        <View style={styles.columnBody30}>
                                            <Text style={styles.bodyCell}>{p.Product.name}</Text>
                                        </View>
                                        <View style={styles.columnBody40}>
                                            <Text style={styles.bodyCell}>{p.Product.description}</Text>
                                        </View>
                                        <View style={styles.columnBody10}>
                                            <Text style={styles.bodyCell}>{p.quantity}</Text>
                                        </View>
                                        <View style={styles.columnBody10}>
                                            <Text style={styles.bodyCell}>USD {p.Product.price}</Text>
                                        </View>
                                        <View style={styles.columnBody10}>
                                            <Text style={styles.bodyCell}>{`USD ${p.quantity * p.Product.price}`}</Text>
                                        </View>
                                    </View>
                                ))
                            }

                            {/* Footer */}
                            <View style={styles.itemRow}>
                                <View style={styles.columnFooterItems}>
                                    <Text style={styles.footerCell}>TOTAL ITEMS: {orderDetail.ProductOrders.length || '0'}</Text>
                                </View>
                                <View style={styles.columnFooterTotal}>
                                    <Text style={styles.footerCell}>TOTAL PAID: USD {
                                        orderDetail.ProductOrders?.reduce((prev, curr) => prev + (curr.quantity * curr.Product.price), 0) || '0'
                                    }</Text>
                                </View>
                            </View>
                        </View>
                        {/* End table */}


                    </View>
                </Page>
            </Document>
            </PDFViewer>
    );
}