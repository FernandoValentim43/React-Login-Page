import { Card } from '../styles/card.jsx' //card style
import { Form } from '../styles/form.jsx'

import CardHead from '../components/CardHead' //img and title
import Input from '../components/Input'
//import '../styles/input.css'


export default function Home() {
    return(
           <Card>
            <CardHead title="Intern Sign Up"/>
              <Form>
                <Input name="Full Name * "type="text"  placeholder="Name" error="Fullname Invalid"/>
                <Input name="Email * "type="email"  placeholder="foo@bar.com" error="Email Invalid"/>
                <Input name="Phone"type="tel"  placeholder="(83) 00000-0000"  error="Phone Invalid"/>
                <Input name="Password* "type="password"  placeholder="Enter your password" error="Password Invalid"/>
                <Input name="Birthday * "type="date" error="Age Invalid"/>
              </Form>
           </Card> 
    )
}