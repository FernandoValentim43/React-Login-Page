import '../styles/global.css' //global css for all pages
import CardHead from '../components/CardHead' //img and title
import Input from '../components/Input'


export default function Home() {
    return(
          <section className="card-Container">
            <CardHead title="Intern Sign Up"/>
            <Input name="Full Name * "type="text"  placeholder="Name"/>
            <Input name="Email * "type="email"  placeholder="foo@bar.com"/>
            <Input name="Phone"type="tel"  placeholder="(83) 00000-0000"/>
            <Input name="Password* "type="password"  placeholder="Enter your password"/>
            <Input name="Birthday * "type="date"/>
          </section>
    )
}