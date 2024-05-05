import { Button, Divider, Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';
import inhailer from '../../../assets/images/inhailer.png';
import Visa from '../../../assets/images/visa2.png';
import Master from '../../../assets/images/master.png';
import Amex from '../../../assets/images/amex.png';

import Cod from '../../../assets/images/cod1.png';



import ContainerForm from '../../../components/ContainerForm/ContainerForm';

const BuyItems = () => {
    const [orders, setOrders] = useState([
        { id: 1, item: inhailer, itemName: "SEROFLO-125 INHALER", qty: "2", price: "650", total: "1400", tax: "100" },
        { id: 2, item: inhailer, itemName: "SEROFLO-125 INHALER", qty: "2", price: "650", total: "1400", tax: "100" },
        { id: 3, item: inhailer, itemName: "SEROFLO-125 INHALER", qty: "2", price: "650", total: "1400", tax: "100" },
        { id: 4, item: inhailer, itemName: "SEROFLO-125 INHALER", qty: "2", price: "650", total: "1400", tax: "100" },
        { id: 5, item: inhailer, itemName: "SEROFLO-125 INHALER", qty: "2", price: "650", total: "1400", tax: "100" },
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(4);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleRemoveItem = (id) => {
        setOrders(orders.filter(order => order.id !== id));
    };

    const filteredOrders = orders.filter((order) =>
        order.itemName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Grid container p={3}>
                <Grid item xs={7}>
                    <TableContainer component={Paper} >
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Item</TableCell>
                                    <TableCell>Item Name</TableCell>
                                    <TableCell>Qty</TableCell>
                                    <TableCell>Price</TableCell>
                                    <TableCell>Tax</TableCell>
                                    <TableCell>Total</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredOrders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((order) => (
                                    <TableRow key={order.id} component={Link} to="" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <TableCell>  <img src={order.item} width={'30%'} alt="" /> </TableCell>
                                        <TableCell>{order.itemName}</TableCell>
                                        <TableCell>{order.qty}</TableCell>
                                        <TableCell>{order.price}</TableCell>
                                        <TableCell>{order.tax}</TableCell>
                                        <TableCell>{order.total}</TableCell>
                                        <TableCell>
                                            <IconButton onClick={() => handleRemoveItem(order.id)}>
                                                <CancelIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[4, 10, 25]}
                        component="div"
                        count={filteredOrders.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Grid>
                <Grid item xs={5}>
                    <ContainerForm>
                        <Typography sx={{ color: "#616161", mt: 1 }} variant='subtitle1'>Summary</Typography>
                        <Divider sx={{ my: 1, width: '40%' }} />
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography sx={{ color: "#616161", mt: 1 }} variant='subtitle1'>Subtotal	</Typography>
                            <Typography sx={{ color: "#616161", mt: 1 }} variant='subtitle1'>LKR1300</Typography>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography sx={{ color: "#616161", mt: 1 }} variant='subtitle1'>Tax	</Typography>
                            <Typography sx={{ color: "#616161", mt: 1 }} variant='subtitle1'>LKR100</Typography>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography sx={{ mt: 1 }} variant='subtitle1'>Order Total	</Typography>
                            <Typography sx={{ mt: 1 }} variant='subtitle1'>LKR1400</Typography>
                        </div>
                        <Divider sx={{ my: 1, width: '100%' }} />
                        <Button variant='outlined'> Place The Order</Button>
                        <div style={{display:'flex', justifyContent:'space-between'}}>
                            <img src={Visa} width={'20%'} alt="" />
                            <img src={Master} width={'20%'} alt="" />

                            <img src={Amex} width={'20%'} alt="" />

                            <img src={Cod} width={'20%'} alt="" />

                        </div>
                    </ContainerForm>
                </Grid>
            </Grid>
        </>
    )
}

export default BuyItems;
