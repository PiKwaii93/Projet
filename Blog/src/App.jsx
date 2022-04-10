import {useEffect, useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import logo from './logo.svg'
import './App.css'
import Connexion from './Connexion'
import Card from './Card'
import CreateCard from './CreateCard'
import Reload from './Reload'
import {Buffer} from "buffer";
import Inscription from './Inscription'
import Deconnexion from './Deconnexion'

function App(){

    const [userNameConnexion, setUserNameConnexion] = useState()
    const [userPasswordConnexion, setUserPasswordConnexion] = useState()
    
    const [userNameInscription, setUserNameInscription] = useState()
    const [userPasswordInscription, setUserPasswordInscription] = useState()
    
    const [title, setTitle] = useState()
    const [content, setContent] = useState()

    const [cards, setCards] = useState([])
    const [users, setUsers] = useState([])

    let x = document.cookie
        .split(';')
        .map(cookie => cookie.split('='))
        .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});



    const inscription = () => {
        const credentials1 = Buffer.from (userNameInscription + ':' + userPasswordInscription).toString('base64')


        const headers1 = new Headers({
            'Authorization' : `Basic ${credentials1}`,
            'Content-type' : 'application/x-www-form-urlencoded'

        })

        const data1 = new URLSearchParams({
            name : userNameInscription,
            password : userPasswordInscription,
            op: "1"
        })
        fetch('http://localhost:2345', {
            method: 'POST',
            credentials: 'include',
            headers: headers1,
            body: data1,
            mode: "cors"
        });
    }

    const connexion = () => {
        const credentials4 = Buffer.from (userNameConnexion + ':' + userPasswordConnexion).toString('base64')


        const headers4 = new Headers({
            'Authorization' : `Basic ${credentials4}`,
            'Content-type' : 'application/x-www-form-urlencoded'

        })

        const data4 = new URLSearchParams({
            name : userNameConnexion,
            password : userPasswordConnexion,
            op: "4"
        })
        fetch('http://localhost:2345', {
            method: 'POST',
            credentials: 'include',
            headers: headers4,
            body: data4,
            mode: "cors"
        })
    }


    const newCard = () => {
        const credentials2 = Buffer.from (title + ':' + content).toString('base64')

        const headers2 = new Headers({
            'Authorization' : `Basic ${credentials2}`,
            'Content-type' : 'application/x-www-form-urlencoded'

        })

        const data2 = new URLSearchParams({
            title : title,
            content : content,
            token : x['connexion'],
            op: "2"
        })
        fetch('http://localhost:2345', {
            method: 'POST',
            credentials: 'include',
            headers: headers2,
            body: data2,
            mode: "cors"
        })
    }

    const cardList = () => {
        const credentials3 = Buffer.from ('' + ':' + '').toString('base64')

        const headers3 = new Headers({
            'Authorization' : `Basic ${credentials3}`,
            'Content-type' : 'application/x-www-form-urlencoded'

        })

        const data3 = new URLSearchParams({
            op: "3"
        })
        fetch('http://localhost:2345', {
            method: 'POST',
            credentials: 'include',
            headers: headers3,
            body: data3,
            mode: "cors"
        }).then(r =>r.json())
        .then(data3 => {
            setCards(data3['postsData']);
            setUsers(data3['usersData'])
        })
    }

    var cookie = false;

    {users.map((user) => {
        if(user[3] == x['connexion']){
            cookie = true;
        }else{

        }
    })}


    useEffect(() => {
        inscription();
    }, [userNameInscription, userPasswordInscription])

    useEffect(() => {
        connexion();
    }, [userNameConnexion, userPasswordConnexion])

    useEffect(() => {
        newCard()
    }, [title, content])

    useEffect(() => {
        cardList()
    }, [title, content])


    console.log(cards);

    return (
    <div>
       <div className='d-flex justify-content-around'>
           <Inscription setUserNameInscription={setUserNameInscription} setPasswordInscription={setUserPasswordInscription} cookie={cookie}></Inscription>
           <Connexion setUserNameConnexion={setUserNameConnexion} setPasswordConnexion={setUserPasswordConnexion} cookie={cookie}></Connexion>
        </div>
       <div>
          <CreateCard setTitle={setTitle} setContent={setContent} cookie={cookie} ></CreateCard>
      </div>
      <div className='d-flex justify-content-center'>
            <Deconnexion cookie={cookie}></Deconnexion>
        </div>
      <div className='d-flex justify-content-center'>
            <Reload></Reload>
        </div>
      <div>
        {cards.map((card )=> (
            <Card title={card[1]} content={card[2]} user={card[3]} date={card[4]} id={card.id} key={card.id} cookie={cookie}/>
        ))} 
      </div>
    </div>
  )
}

export default App
