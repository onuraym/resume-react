
import './App.css';
import React from 'react';
import MainInfo from './components/Maininfo';
import Edication from './components/Edication';
import Expirience from './components/Expirience';
import Hobbies from './components/Hobbies';
import DesiredCompensation from './components/DesiredCompensation';

const App = ()  => {
  const personalData = {
    fullName: "Omurbekova Nuraym",
    birthYear: 2000,
    desiredPosition: "front-end developer",
    university: "KGUSTA",
    graduationYear: 2022,
    lastWorkPlace: "florist in Green office",
    lastWorkYears: "2020 -2021",
    skills: ["HTML", "CSS", "JS", "React"],
    hobbies: [
      "cooking",
      "reading books",
      "stretching"
    ],
    desiredCompensation: 50000
  }

  function getJobExp (data) {
    const years = data.split("-");
    return Number(years[1]) - Number(years[0]);
  }

  const data = (
    <div className="App">
     <MainInfo
      fullName = {personalData.fullName}
      age = {new Date().getFullYear() - personalData.birthYear}
      desiredPosition = {personalData.desiredPosition}
     />
     <Edication
      university = {personalData.university}
      graduationYear = {personalData.graduationYear}
     />
     <Expirience
      lastWorkPlace = {personalData.lastWorkPlace}
      expirience = {getJobExp(personalData.lastWorkYears)}
      skills = {personalData.skills}
     />
     <Hobbies
      hobbies = {personalData.hobbies}
     />
     <DesiredCompensation
      desiredCompensation = {personalData.desiredCompensation}
     />
    </div>
  )

  return data;
}

export default App;
