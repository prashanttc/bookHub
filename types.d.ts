 interface books {
    id:number;
    title:string;
    author:string;
    genre:string;
    rating:number;
    total_copies:number;
    available_copies:number;
    description:string;
    summary:string; 
    color:string;
    cover:string;  
    isLoanedBook?:boolean;
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