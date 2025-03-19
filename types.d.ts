 interface bookProps {
    id:number;
    title:string;
    author:string;
    genre:string;
    rating:number;
    copies:number;
    available:number;
    description:string;
    summary:string; 
    color:string;
    imageUrl:string;  
    isLoanedBook?:boolean;
 }
 interface lonedBookProps {
    id:number;
    title:string;
    dueDate:string;
    author:string;
    genre:string;
    rating:number;
    color:string;
    imageUrl:string;  
 }
 interface UserProps {
 email:string,
 name:string,
 password:string,
 phone:string,
 enrollmentNumber:string,
 department:string,
 year:string,
 }