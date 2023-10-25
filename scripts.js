
const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

// Define the status based on the STATUS_MAP object
 const color1 = STATUS_MAP.overdue.color;
 const reserve1 = STATUS_MAP.overdue.canReserve ;
 const checkout1 = STATUS_MAP.overdue.canCheckout;
 const checkin1 = STATUS_MAP.overdue.canCheckIn ;
 

 const color2 = STATUS_MAP.reserved.color;
 const reserve2 = STATUS_MAP.reserved.canReserve;
 const checkout2 = STATUS_MAP.reserved.canCheckout;
 const checkin2 = STATUS_MAP.reserved.canCheckIn;


 const color3 = STATUS_MAP.shelf.color;
 const reserve3 = STATUS_MAP.shelf.canReserve;
 const checkout3 = STATUS_MAP.shelf.canCheckout;
 const checkin3 = STATUS_MAP.shelf.canCheckIn;

 //change status color 
 const elements = document.getElementsByClassName("status");
 
 if (elements[0]) {
   elements[0].style.color = color1;
 }
 
 if (elements[1]) {
   elements[1].style.color = color2;
 }
 
 if (elements[2]) {
   elements[2].style.color = color3;
 }
 //Remove color on checkin button
 const elementCheckIn = document.getElementsByClassName("checkin");
 
 if (elementCheckIn[0]) {
   elementCheckIn[0].style.color = "";
 }
 
 if (elementCheckIn[1]) {
   elementCheckIn[1].style.color = "";
 }
 
 if (elementCheckIn[2]) {
   elementCheckIn[2].style.color = "";
 }


 const elementReserve = document.getElementsByClassName("reserve");

 if (elementReserve[0]) {
   elementReserve[0].disabled=reserve1;}
   
 
 if (elementReserve[1]) {
   elementReserve[1].disabled=reserve2;}

 if (elementReserve[2]) {
   elementReserve[2].disabled=reserve3;}


 const elementCheckout = document.getElementsByClassName("checkout");
 if (elementCheckout[0]) {
    elementCheckout[0].disabled=checkout1;}
    
  
  if (elementCheckout[1]) {
    elementCheckout[1].disabled=checkout2;}
 
  if (elementCheckout[2]) {
    elementCheckout[2].disabled=checkout3;}

    const elementCheckin = document.getElementsByClassName("checkin");
    if (elementCheckin[0]) {
       elementCheckin[0].disabled=checkin1;}
       
     
     if (elementCheckin[1]) {
       elementCheckin[1].disabled=checkin2;}
    
     if (elementCheckin[2]) {
       elementCheckin[2].disabled=checkin3;}

