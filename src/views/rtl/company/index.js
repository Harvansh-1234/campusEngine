import React, { useEffect } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react';
import {getCompany} from "../../../service/api";
export default function() {
    const [students, setStudents] = React.useState([]);
    useEffect(() => {
        const initial = async () => {const token = localStorage.getItem('token');
            const students = await getCompany(token);
            setStudents(students.data.data);
            console.log(students);
        }
        initial();
    }, []);
    return (
        <div style={{marginTop:'100px'}}>
            <TableContainer>
                <Table variant='simple'>
                    <TableCaption>Companies Enlisted</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>email</Th>
                            <Th>Contact</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {students && students.map((student) => {
                            return (
                                <Tr>
                                    <Td>{student.companyName}</Td>
                                    <Td>{student.email}</Td>
                                    <Td>{student.contactNo}</Td>
                                </Tr>
                            )
                        }
                        )}
                       
                    </Tbody>

                </Table>
            </TableContainer>
        </div>
    )
}
