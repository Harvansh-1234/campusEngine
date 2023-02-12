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
import {getStudents} from "../../../service/api";
export default function() {
    const [students, setStudents] = React.useState([]);
    useEffect(() => {
        const initial = async () => {
            const students = await getStudents();
            setStudents(students.data.data);
            console.log(students);
        }
        initial();
    }, []);
    return (
        <div style={{marginTop:'100px'}}>
            <TableContainer>
                <Table variant='simple'>
                    <TableCaption>Students</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>email</Th>
                            <Th>Contact</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {students.map((student) => {
                            return (
                                <Tr>
                                    <Td>{student.firstName}</Td>
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
