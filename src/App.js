
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap for styling
import './VideoGallery.css'; // Optional CSS for additional styling

import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

const projects = [
  {
      "Number": 1,
      "Title": "Interface graphique",
      "Developer": "Ait Ouahda Younes",
      "Video URL": "/videos/video1.mp4",
      "GitHub URL": "https://github.com/YounesAO/Android-kotlin-project-TP1"
  },
  {
      "Number": 2,
      "Title": "Pizza",
      "Developer": "Amerga Younes",
      "Video URL": "/videos/video2.mp4",
      "GitHub URL": "https://github.com/Younessamg/pizza_mobile.git"
  },
  {
      "Number": 3,
      "Title": "TabHost",
      "Developer": "Anejjar Ihssane",
      "Video URL": "/videos/video3.mp4",
      "GitHub URL": "https://github.com/Anejjar24/Gestion-taches"
  },
  {
      "Number": 4,
      "Title": "RecyclerView",
      "Developer": "AZIZ Mohammed",
      "Video URL": "/videos/video4.mp4",
      "GitHub URL": "https://github.com/aziz-laravel/Projet4"
  },
  {
      "Number": 5,
      "Title": "Volley + Image",
      "Developer": "Ballouk Mohamed",
      "Video URL": "/videos/video5.mp4",
      "GitHub URL": "https://github.com/Ballouk12/projet5.git"
  },
  {
      "Number": 6,
      "Title": "Localisation",
      "Developer": "BEESAM Adam",
      "Video URL": "/videos/video6.mp4",
      "GitHub URL": "https://github.com/AdamBessam/Controle-Mobile"
  },
  {
      "Number": 7,
      "Title": "Map + Volley",
      "Developer": "BOKTAYA Amine",
      "Video URL": "/videos/video7.mp4",
      "GitHub URL": "https://github.com/BoktayaAmine/dev_mobile_projects/tree/master/Google_Maps_App"
  },
  {
      "Number": 8,
      "Title": "SQLite",
      "Developer": "BOUJNAH AsSia",
      "Video URL": "/videos/video8.mp4",
      "GitHub URL": "https://github.com/assia1905/TPSQLite"
  },
  {
      "Number": 9,
      "Title": "Fragment",
      "Developer": "BOUKHRAIS Meryem",
      "Video URL": "/videos/video9.mp4",
      "GitHub URL": "https://github.com/Bou-Mery/MyNewsApp"
  },
  {
      "Number": 10,
      "Title": "Navigation Drawer",
      "Developer": "Bouleknadel Abderrahmane",
      "Video URL": "/videos/video10.mp4",
      "GitHub URL": "https://github.com/bouleknadel/LibraryApp.git"
  },
  {
      "Number": 11,
      "Title": "Notifications",
      "Developer": "BOUSENSAR Rajaa",
      "Video URL": "/videos/video11.mp4",
      "GitHub URL": "https://github.com/rajaa52/depot1.git"
  },
  {
      "Number": 12,
      "Title": "Capteurs",
      "Developer": "CHAJARI Salma",
      "Video URL": "/videos/video12.mp4",
      "GitHub URL": "https://github.com/Salma-CHAJARI/SensorsProject.git"
  },
  {
      "Number": 13,
      "Title": "Retrofit",
      "Developer": "CHOUAY Walid",
      "Video URL": "/videos/video13.mp4",
      "GitHub URL": "https://github.com/CHOUAY15/EnsaHealth"
  },
  {
      "Number": 14,
      "Title": "Room",
      "Developer": "DAOUDI Mohammed",
      "Video URL": "/videos/video14.mp4",
      "GitHub URL": "https://github.com/Mohammedaoudi/ENSAJ-APP-Management"
  },
  {
      "Number": 15,
      "Title": "TabLayout + ViewPager/Fragment",
      "Developer": "DOUIDY Sifeddine",
      "Video URL": "/videos/video15.mp4",
      "GitHub URL": "https://github.com/SaifeddineDouidy/Beginner-Projects-Mobile-JAVA/tree/master/Projet_Controle"
  },
  {
      "Number": 16,
      "Title": "LiveData + ViewModel",
      "Developer": "DRIHAM Siham",
      "Video URL": "/videos/video16.mp4",
      "GitHub URL": "https://github.com/SihamDriham/TodoList"
  },
  {
      "Number": 17,
      "Title": "Data Binding",
      "Developer": "EL ABIDI Aya",
      "Video URL": "/videos/video17.mp4",
      "GitHub URL": "https://github.com/yaelaya/TP-Visit_Paris.git"
  },
  {
      "Number": 18,
      "Title": "Firebase",
      "Developer": "EL GHARBI ABDELLAH",
      "Video URL": "/videos/video18.mp4",
      "GitHub URL": "https://github.com/abdellah-elgharbi/chat.git"
  },
  {
      "Number": 19,
      "Title": "Coroutines",
      "Developer": "EL MAHJOUBI Soukaina",
      "Video URL": "/videos/video19.mp4",
      "GitHub URL": "elmahjoubisouka/Mini_projet_application_Quiz"
  },
  {
      "Number": 20,
      "Title": "WorkManager",
      "Developer": "EL MASKYNE Mohamed Amine",
      "Video URL": "/videos/video20.mp4",
      "GitHub URL": "https://github.com/MOHAMED-AMINE11/E-MEDEC.git"
  },
  {
      "Number": 21,
      "Title": "Bluetooth",
      "Developer": "ELBAHLOULI Salma",
      "Video URL": "/videos/video21.mp4",
      "GitHub URL": "https://github.com/salma510/Bluetooth"
  },
  {
      "Number": 22,
      "Title": "Camera API",
      "Developer": "ELHALLA Zineb",
      "Video URL": "/videos/video22.mp4",
      "GitHub URL": "https://github.com/ZinebELHALLA/CamApp"
  },
  {
      "Number": 23,
      "Title": "ExoPlayer",
      "Developer": "ELLOUBAB Aya",
      "Video URL": "/videos/video23.mp4",
      "GitHub URL": "https://github.com/aya-elloubab/ExoPlayer-Android-Application"
  },
  {
      "Number": 24,
      "Title": "Firebase Cloud Messaging",
      "Developer": "Fattouhi Radwa",
      "Video URL": "/videos/video24.mp4",
      "GitHub URL": "https://github.com/Radwa-f/FCM_Project.git"
  },
  {
      "Number": 25,
      "Title": "Jetpack Compose",
      "Developer": "Fihri Yasmine",
      "Video URL": "/videos/video25.mp4",
      "GitHub URL": "https://github.com/yasminefhr1/MovieApp_Contole"
  },
  {
      "Number": 26,
      "Title": "Permissions Runtime",
      "Developer": "HARATI Ayoub",
      "Video URL": "/videos/video26.mp4",
      "GitHub URL": "https://github.com/ayoub-aav/TPs-CoursMobile/tree/main/permission"
  },
  {
      "Number": 27,
      "Title": "Gesture Detection",
      "Developer": "Khalil Fatima",
      "Video URL": "/videos/video27.mp4",
      "GitHub URL": "https://github.com/fatikhalil/projet1.git"
  },
  {
      "Number": 28,
      "Title": "Lottie Animations",
      "Developer": "Lahlou Asmae",
      "Video URL": "/videos/video28.mp4",
      "GitHub URL": "https://github.com/lahlouasmae/FlowerShop"
  },
  {
      "Number": 29,
      "Title": "NFC",
      "Developer": "Lahlyal Ahmed Moubarak",
      "Video URL": "/videos/video29.mp4",
      "GitHub URL": "https://github.com/amlmbr/GestionNFC"
  },
  {
      "Number": 30,
      "Title": "Multithreading",
      "Developer": "MAGHNI Manal",
      "Video URL": "/videos/video30.mp4",
      "GitHub URL": "https://github.com/ManalMaghni/Projet/tree/master"
  },
  {
      "Number": 31,
      "Title": "ConstraintLayout Avancé",
      "Developer": "Mandour Ilyass",
      "Video URL": "/videos/video31.mp4",
      "GitHub URL": "https://github.com/ilyassman/EnsajFood/"
  },
  {
      "Number": 32,
      "Title": "Sauvegarde d'États",
      "Developer": "Miskar Amina",
      "Video URL": "/videos/video32.mp4",
      "GitHub URL": "https://github.com/miskaraminaa/NoteAPP_ViewModel.git"
  },
  {
      "Number": 33,
      "Title": "Navigation Component",
      "Developer": "Sabrou hafsa",
      "Video URL": "/videos/video33.mp4",
      "GitHub URL": "https://github.com/Hafsa1sa/CupcakeCorner.git"
  },
  {
      "Number": 34,
      "Title": "Paging Library",
      "Developer": "Sakhr niama",
      "Video URL": "/videos/video34.mp4",
      "GitHub URL": "https://github.com/niama22/Projet34-mobile.git"
  },
  {
      "Number": 35,
      "Title": "Tests Unitaires avec JUnit",
      "Developer": "Taghti Zineb",
      "Video URL": "/videos/video35.mp4",
      "GitHub URL": "https://github.com/zinebtaghti/To_Do_List"
  },
  {
      "Number": 36,
      "Title": "Tests Instrumentés avec Espresso",
      "Developer": "ZAHIR Oumaima",
      "Video URL": "/videos/video36.mp4",
      "GitHub URL": "https://github.com/ZahirOuma/MyLibraryApp/tree/master"
  },
  {
      "Number": 37,
      "Title": "Services Android",
      "Developer": "ZENNOURI Nassima",
      "Video URL": "/videos/video37.mp4",
      "GitHub URL": "https://github.com/NassimaZENNOURI/ProjetMusique"
  }
]
;

const VideoGallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const handleVideoClick = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentVideo(null);
  };

  return (
    <div className="container my-5">
      
      <div className="container">
      <header className="text-center mb-5">
        <h3 className="display-4">Contrôle pratique programmation mobile</h3>
        <h4 className="text-muted">2ITE ENSA EL JADIDA</h4>
        <h5 className="text-secondary">Pr. Mohamed LACHGAR</h5>
        <p style={{ color: "red" }}>
          Il est impératif d'utiliser les conceptions fixées dans chaque travail.
        </p>
      </header>
    </div>

      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card h-100 shadow border-0 rounded">
              <div 
                className="card-img-top rounded-top video-thumbnail" 
                style={{ cursor: 'pointer' }}
                onClick={() => handleVideoClick(project.videoUrl)}
              >
                <video width="100%" height="150" controls={false}>
                  <source src={project.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="card-body text-center">
                <h5 className="card-title font-weight-bold">{`Projet ${project.number}: ${project.title}`}</h5>
                <p className="card-text text-muted">Développé par : {project.developer}</p>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
                  Voir sur GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal pour afficher la vidéo */}
      <Modal show={showModal} onHide={handleCloseModal} centered size="md">
        <Modal.Header closeButton>
          <Modal.Title>Vidéo du projet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currentVideo && (
            <div className="video-container">
              <video width="100%" controls autoPlay>
                <source src={currentVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default VideoGallery;