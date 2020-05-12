import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import { Link } from "react-router-dom";
import CommentForm from "./CommentFormComponent";

// class DishDetail extends Component {
//   constructor(props) {
//     super(props);
//   }

//   renderComments(comments) {
//     if (comments != null) {
//       return comments.map((comment) => {
//         return (
//           <div key={comment.id} className="container">
//             <ul className="list-unstyled">
//               <li>{comment.comment}</li>
//               <br></br>
//               <li>
//                 -- {comment.author},{" "}
//                 {new Intl.DateTimeFormat("en-US", {
//                   year: "numeric",
//                   month: "short",
//                   day: "2-digit",
//                 }).format(new Date(Date.parse(comment.date)))}
//               </li>
//             </ul>
//           </div>
//         );
//       });
//     } else {
//       return <div></div>;
//     }
//   }

//   render() {
//     if (this.props.dish != null) {
//       return (
//         <div className="container">
//           <div className="row">
//             <div className="col-12 col-md-5 m-1">
//               <Card>
//                 <CardImg
//                   width="100%"
//                   src={this.props.dish.image}
//                   alt={this.props.dish.name}
//                 />
//                 <CardBody>
//                   <CardTitle>{this.props.dish.name}</CardTitle>
//                   <CardText>{this.props.dish.description}</CardText>
//                 </CardBody>
//               </Card>
//             </div>
//             <div className="col-12 col-md-5 m-1">
//               <h4>Comments</h4>
//               {this.renderComments(this.props.dish.comments)}
//             </div>
//           </div>
//         </div>
//       );
//     } else {
//       return <div></div>;
//     }
//   }
// }

const DishDetail = (props) => {
  // console.log(props);
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg
                width="100%"
                src={props.dish.image}
                alt={props.dish.name}
              />
              <CardBody>
                <CardTitle>{props.dish.name}</CardTitle>
                <CardText>{props.dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <RenderComments comments={props.comments} />
            <CommentForm />
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

function RenderComments({ comments }) {
  // console.log(comments);
  // return <div></div>;
  if (comments != null) {
    return comments.map((comment) => {
      return (
        <div key={comment.id} className="container">
          <ul className="list-unstyled">
            <li>{comment.comment}</li>
            <br></br>
            <li>
              -- {comment.author},{" "}
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(Date.parse(comment.date)))}
            </li>
          </ul>
        </div>
      );
    });
  } else {
    return <div></div>;
  }
}

export default DishDetail;
