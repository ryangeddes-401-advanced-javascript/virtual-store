
import React, {useState, useEffect, useContext} from 'react';
import { If, Then, Else, When, Unless, Switch, Case, Default } from 'react-if';

import ListGroup from 'react-bootstrap/ListGroup';
import Toast from 'react-bootstrap/Toast'
import Badge from 'react-bootstrap/Badge'
// import Pagination from 'react-bootstrap/Pagination';
import Collapse from 'react-bootstrap/Collapse'
import Auth from '../../context/auth/auth.js'

import {LoginContext} from '../../context/auth/context.js';
import {SettingsContext} from '../../context/settings-context.js';



function List(props) {

  const settingsContext = useContext(SettingsContext);
  const userContext = useContext(LoginContext);

  const [page, setPage] = useState(1);
  const [tempArray, setTempArray] = useState([])
  const [buttonListArray, setButtonListArray] = useState([])

  useEffect ( () => {
    let initial = itemPagina(props.itemList, page)
    setTempArray(initial);
  },[props.itemList]);

  useEffect ( () => {
    let length = props.itemList.length;
    let iterator = Math.ceil(length/settingsContext.itemsPerScreen);
    let result = [];
    for(let i = 1; i <= iterator; i++){
      result.push(i);
    }
    setButtonListArray(result);
  },[props.itemList]);

  useEffect ( () => {
    let clickedPage = itemPagina(props.itemList, page)
    setTempArray(clickedPage);
  },[page]);


  function itemPagina(objArr, page){
    let itemPerPage = settingsContext.itemsPerScreen;
    let tempArr = objArr.slice((page*itemPerPage)-settingsContext.itemsPerScreen, page*itemPerPage);
    return(tempArr);
  };


  function pageClick(pageClicked){
   setPage(pageClicked);
  }

  function canDelete(user) {
     return user.permissions.includes("delete ")
  }

  let renderList = tempArray.map((item)=> (
      <>
      
      <Toast className="rounded mr-2" key={item._id} onClose={() => props.makeDelete(item._id)}>
     
      <Toast.Header closeButton={canDelete(userContext.user)}>
        <If condition={item.complete} >
          <Then>
          <Auth capability="update">
              <Badge onClick={()=> props.makePut(item)} pill variant="danger">
                Complete
              </Badge>
          </Auth> 
          </Then>
          <Else>
            <Auth capability="update">
              <Badge  onClick={()=> props.makePut(item)} pill variant="success">
                Pending
              </Badge>
            </Auth> 
          </Else>
        </If>
        <strong className="mr-auto">  {item.assignee}</strong>
        <small>Difficulty: {item.difficulty}</small>
      </Toast.Header>
        <Collapse in={item.complete}>
        <Toast.Body >
          {item.text}
        </Toast.Body>
        </Collapse> 
      </Toast>
      
    </>
  ))


  let renderButtons = (
    <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item"><a class="page-link" href="#">Previous</a></li>

      {buttonListArray.map((value) => (
          <li class="page-item" ><a class="page-link" href="#" onClick={()=> pageClick(value)}>{value}</a></li>
      ))} 

      <li class="page-item"><a class="page-link" href="#">Next</a></li>
    </ul>
  </nav>
  )


  // let paginationButtons = (
  //   <>
  //     <Pagination>
  //       <Pagination.Item key='previous' > Previous </Pagination.Item>
  //       {
  //         buttonListArray.map((value) => (
  //           <Pagination.Item key={value} onClick={()=> pageClick(value)}>
  //             {value}
  //           </Pagination.Item>
  //         ))
  //       }
  //       <Pagination.Item key='next' > Next </Pagination.Item>
  //     </Pagination>
  //   </>
  // )

  return(
    <>
      <ListGroup>
        {renderList}
        {renderButtons}
      </ListGroup>
      {/* {paginationButtons} */}
    </>
  )
}


export default List;
