import { Name } from "./Name";
import { Price } from "./Price";
import { Image} from "./Image";
import { Description } from "./Description";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function App() {
  return (
    <>
     {/* This is the main component  */}
    <Card style={{ width: '28rem' }}>
      <Image></Image>{/* This is the Image component */}
      <Card.Body>
        <Name></Name>{/* This is the Nane component */}
       <Description></Description>{/* This is the desc component */}
       <Price></Price>{/* This is the Price component */}
      </Card.Body>
    </Card>
    </>
  );
}

export default App;
