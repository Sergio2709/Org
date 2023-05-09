import { useState } from 'react';
import { v4 as identificators } from "uuid"
import './App.css';
import Header from './components/header/header.jsx';
import Form from './components/form/form.jsx';
import MiOrg from './components/MiOrg';
import Team from './components/team';
import Footer from './components/footer';

function App() {
  const [showForm, updateShow] = useState(false)
  const [collaborators, setCollaborators] = useState([
    {
      id:identificators(),
      name:"Sergio Castillo",
      photo:"https://github.com/Sergio2709.png",
      position:"Junior",
      team:"Data Science",
      fav: true
    },
    {
      id:identificators(),
      name:"Harland Lohora",
      photo:"https://github.com/harlandLohora.png",
      position:"Instructor",
      team:"Front end",
      fav: true
    },
    {
      id:identificators(),
      name:"Genesys Rondon",
      photo:"https://github.com/genesysaluralatam.png",
      position:"Desarrolladora",
      team:"Programacion",
      fav: false
    },
    {
      id:identificators(),
      name:"Jeanmarie Quijada",
      photo:"https://github.com/JeanmarieAluraLatam.png",
      position:"Instructora",
      team:"UX y diseno",
      fav: true
    },
    {
      id:identificators(),
      name:"Cristian Velasco",
      photo:"https://github.com/christianpva.png",
      position:"Head de Alura ",
      team:"Programacion",
      fav: true
    },
  ])

  const [teams, setTeams] = useState([  
    {
      id:identificators(),
      title:"Programacion",
      color1:"#57C278",
      color2:"#D9F7E9",
    },
    {
      id:identificators(),
      title:"Front end",
      color1:"#82CFFA",
      color2:"#E8F8FF",
    },
    {
      id:identificators(),
      title:"Data Science",
      color1:"#A6D157",
      color2:"#F0F8E2",
    },
    {
      id:identificators(),
      title:"Devops",
      color1:"#E06B69",
      color2:"#FDE7E8",
    },
    {
      id:identificators(),
      title:"UX y diseno",
      color1:"#DB6E8F",
      color2:"#FAE9F5",
    },
    {
      id:identificators(),
      title:"Movil",
      color1:"#FFBA05",
      color2:"#FFF5D9",
    },
    {
      id:identificators(),
      title:"Innovacion y Gestion",
      color1:"#FF8A29",
      color2:"#FFEEDF",
    }
  ])
  
  //ternario --> condicion ? se muestra : noSeMuestra
  // condicion && seMuestra

  const changeShow = () => {
    updateShow(!showForm);
  }

  //Registrar

  const registerCollab = (collaborator) => {
    //Spread operator
    setCollaborators([...collaborators, collaborator])
  }

  //Eliminar

  const deleteCollab = (id) => {
    console.log("Eliminar Colaborador",id)
    const newCollaborator = collaborators.filter((collaborator) => collaborator.id !== id)
    setCollaborators(newCollaborator)
  }

  //actualizar Color

  const setColor = (color, id) => {
    console.log("actualizar",color,id)
    const NewTeams = teams.map((team)=> {
      if(team.id === id){
        team.color1 = color
      }
      return team
    })
    setTeams(NewTeams)
  }

  //Crear equipo

  const createTeam = (newTeam) => {
    setTeams([...teams, { ...newTeam, id:identificators() }])
    console.log(newTeam, teams)
  }

  //LIKE

  const like = (id) => {
    console.log("like ", id)
    const newCollabs = collaborators.map((collaborator) => {
      if (collaborator.id === id){
        collaborator.fav = !collaborator.fav
      }
      return collaborator
    })
    updateShow(newCollabs)
  }


  return (
    <div>
      <Header />
      { /*showForm ? <Form /> : <></>*/}
      {
        showForm && <Form 
        teams={teams.map((team) => team.title)}
        registerCollab = {registerCollab}
        createTeam={createTeam} />
      }
      <MiOrg changeShow={changeShow}/>

      {
        teams.map( (team) => <Team 
        datos={team} 
        key={team.title}
        collaborators={collaborators.filter( collaborator => collaborator.team === team.title)}
        deleteCollab={deleteCollab}
        setColor={setColor}
        like={like}/>)
      }`    
      <Footer /> `
    </div>
  );
}

export default App;
