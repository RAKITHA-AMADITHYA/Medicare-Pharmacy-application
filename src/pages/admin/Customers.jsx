import React, { useState } from 'react';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Pagination, TextField, Chip, Button, MenuItem, Select, Modal, Box, Divider } from '@mui/material';
const Customers = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [searchName, setSearchName] = useState('');
    const [role, setRole] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChange = (event) => {
        setRole(event.target.value);
    };

    const users = [
        { id: 1, name: 'Jason Stieve', mobile: '1234567890', contact: '1234567890', email: 'johnDoe@gmail.com', address: '123 Main St', nic: '123456789V', Gender: 'Male' },
        { id: 2, name: 'Jane Smith', contact: '0987654321', mobile: '1234567890', email: 'johnDoe@gmail.com', address: '456 Elm St', nic: '123456789V', Gender: 'Female' },
        // Add more user data as needed
    ];

    const handleUpdate = (id) => {
        console.log(`Update user with id ${id}`);
    };

    const handleDelete = (id) => {
        console.log(`Delete user with id ${id}`);
    };

    const handleRowClick = (user) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    };

    const indexOfLastUser = currentPage * rowsPerPage;
    const indexOfFirstUser = indexOfLastUser - rowsPerPage;
    let filteredUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    if (searchName) {
        filteredUsers = filteredUsers.filter(user =>
            Object.values(user).some(value =>
                typeof value === 'string' && value.toLowerCase().includes(searchName.toLowerCase())
            )
        );
    }

    if (role) {
        filteredUsers = filteredUsers.filter(user => user.paymentStatus.toLowerCase() === role.toLowerCase());
    }

    const handleChangePage = (event, newPage) => {
        setCurrentPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setCurrentPage(1);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} p={2}>
                <Grid container p={1} spacing={1}>
                    <Grid item xs={12} sm={3}>
                        <Typography variant='subtitle2'
                            sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '13px', xl: '15px' } }} fontWeight={200}>
                            Search   <span style={{ color: '#0070C0' }}>*</span></Typography>
                        <TextField
                            value={searchName}
                            onChange={(e) => setSearchName(e.target.value)}
                            fullWidth
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    height: '30px', // Set the desired height
                                },
                                '& .MuiOutlinedInput-input': {
                                    padding: '10px', // Optional: Add padding to the input field
                                },
                            }}

                        />
                    </Grid>


                </Grid>

                <TableContainer component={Paper}>
                    <Table>
                        <TableHead sx={{ background: '#ec407a' }}>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Mobile</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Address</TableCell>
                                <TableCell>NIC</TableCell>
                                <TableCell>Gender </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredUsers.map((user) => (
                                <TableRow key={user.id} >
                                    <TableCell>{user.id}</TableCell>
                                    <TableCell>
                                    {user.name}
                                    
                                    </TableCell>
                                    <TableCell>{user.mobile}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.address}</TableCell>
                                    <TableCell>{user.nic}</TableCell>
                                    <TableCell>{user.Gender}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Pagination
                    count={Math.ceil(users.length / rowsPerPage)}
                    page={currentPage}
                    onChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    component="div"
                    rowsPerPageOptions={[5, 10, 25]}
                />
            </Grid>
           

        </>
    );
}

export default Customers;
