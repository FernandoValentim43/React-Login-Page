import '../styles/global.css' //global css for all pages
import CardHead from '../components/CardHead' //img and title
import Input from '../components/Input'


export default function Home() {
    return(
          <section className="card-Container">
            <CardHead title="Intern Sign Up"/>
            <Input/>
          </section>
    )
}