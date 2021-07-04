import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

const Posts = ({ posts, loading}) => {
    if(loading){
        return <h2>Loading...</h2>
    }
    
    return (
        <>
            <TableContainer component={Paper}>
                    <Table className={posts.table} aria-label="customized table">
                        <TableHead>
                        
                        <TableRow>
                            <StyledTableCell>Id</StyledTableCell>
                            <StyledTableCell>Full Name</StyledTableCell>
                            <StyledTableCell>Phone</StyledTableCell>
                            <StyledTableCell>Email</StyledTableCell>
                            <StyledTableCell>Premium</StyledTableCell>
                            <StyledTableCell>Max/Min bid</StyledTableCell>
                            
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {
                            posts.map((e) => (
                                
                            <StyledTableRow key={e.id}>
                            <StyledTableCell component="th" scope="row">
                                {e.id}
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row">
                                {e.firstname} {e.lastname}
                                <Avatar alt="Remy Sharp" src={e.avatarUrl} className={posts.large}/>
                            </StyledTableCell>
                            <StyledTableCell >{e.phone}</StyledTableCell>
                            <StyledTableCell >{e.email}</StyledTableCell>
                            <StyledTableCell >{'true'}</StyledTableCell>
                            <StyledTableCell >{e.bids[0].amount}</StyledTableCell>
                             
                            </StyledTableRow>
                            
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
        </>
    )
}

export default Posts
