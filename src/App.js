
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap for styling
import './VideoGallery.css'; // Optional CSS for additional styling

import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

const projects = [
  { number: 1, title: 'Interface graphique', developer: 'Nom 1', videoUrl: '/videos/video1.mp4', githubUrl: 'https://github.com/user/projet1' },
  { number: 2, title: 'Pizza', developer: 'Nom 2', videoUrl: '/videos/video2.mp4', githubUrl: 'https://github.com/user/projet2' },
  { number: 3, title: 'TabHost', developer: 'Nom 3', videoUrl: '/videos/video3.mp4', githubUrl: 'https://github.com/user/projet3' },
  { number: 4, title: 'RecyclerView', developer: 'Nom 4', videoUrl: '/videos/video4.mp4', githubUrl: 'https://github.com/user/projet4' },
  { number: 5, title: 'Volley + Image', developer: 'Nom 5', videoUrl: '/videos/video5.mp4', githubUrl: 'https://github.com/user/projet5' },
  { number: 6, title: 'Localisation', developer: 'Nom 6', videoUrl: '/videos/video6.mp4', githubUrl: 'https://github.com/user/projet6' },
  { number: 7, title: 'Map + Volley', developer: 'Nom 7', videoUrl: '/videos/video7.mp4', githubUrl: 'https://github.com/user/projet7' },
  { number: 8, title: 'SQLite', developer: 'Nom 8', videoUrl: '/videos/video8.mp4', githubUrl: 'https://github.com/user/projet8' },
  { number: 9, title: 'Fragment', developer: 'Nom 9', videoUrl: '/videos/video9.mp4', githubUrl: 'https://github.com/user/projet9' },
  { number: 10, title: 'Navigation Drawer', developer: 'Nom 10', videoUrl: '/videos/video10.mp4', githubUrl: 'https://github.com/user/projet10' },
  { number: 11, title: 'Notifications', developer: 'Nom 11', videoUrl: '/videos/video11.mp4', githubUrl: 'https://github.com/user/projet11' },
  { number: 12, title: 'Capteurs', developer: 'Nom 12', videoUrl: '/videos/video12.mp4', githubUrl: 'https://github.com/user/projet12' },
  { number: 13, title: 'Retrofit', developer: 'Nom 13', videoUrl: '/videos/video13.mp4', githubUrl: 'https://github.com/user/projet13' },
  { number: 14, title: 'Room', developer: 'Nom 14', videoUrl: '/videos/video14.mp4', githubUrl: 'https://github.com/user/projet14' },
  { number: 15, title: 'TabLayout + ViewPager/Fragment', developer: 'Nom 15', videoUrl: '/videos/video15.mp4', githubUrl: 'https://github.com/user/projet15' },
  { number: 16, title: 'LiveData + ViewModel', developer: 'Nom 16', videoUrl: '/videos/video16.mp4', githubUrl: 'https://github.com/user/projet16' },
  { number: 17, title: 'Data Binding', developer: 'Nom 17', videoUrl: '/videos/video17.mp4', githubUrl: 'https://github.com/user/projet17' },
  { number: 18, title: 'Firebase', developer: 'Nom 18', videoUrl: '/videos/video18.mp4', githubUrl: 'https://github.com/user/projet18' },
  { number: 19, title: 'Coroutines', developer: 'Nom 19', videoUrl: '/videos/video19.mp4', githubUrl: 'https://github.com/user/projet19' },
  { number: 20, title: 'WorkManager', developer: 'Nom 20', videoUrl: '/videos/video20.mp4', githubUrl: 'https://github.com/user/projet20' },
  { number: 21, title: 'Bluetooth', developer: 'Nom 21', videoUrl: '/videos/video21.mp4', githubUrl: 'https://github.com/user/projet21' },
  { number: 22, title: 'Camera API', developer: 'Nom 22', videoUrl: '/videos/video22.mp4', githubUrl: 'https://github.com/user/projet22' },
  { number: 23, title: 'ExoPlayer', developer: 'Nom 23', videoUrl: '/videos/video23.mp4', githubUrl: 'https://github.com/user/projet23' },
  { number: 24, title: 'Firebase Cloud Messaging', developer: 'Nom 24', videoUrl: '/videos/video24.mp4', githubUrl: 'https://github.com/user/projet24' },
  { number: 25, title: 'Jetpack Compose', developer: 'Nom 25', videoUrl: '/videos/video25.mp4', githubUrl: 'https://github.com/user/projet25' },
  { number: 26, title: 'Permissions Runtime', developer: 'Nom 26', videoUrl: '/videos/video26.mp4', githubUrl: 'https://github.com/user/projet26' },
  { number: 27, title: 'Gesture Detection', developer: 'Nom 27', videoUrl: '/videos/video27.mp4', githubUrl: 'https://github.com/user/projet27' },
  { number: 28, title: 'Lottie Animations', developer: 'Nom 28', videoUrl: '/videos/video28.mp4', githubUrl: 'https://github.com/user/projet28' },
  { number: 29, title: 'NFC', developer: 'Nom 29', videoUrl: '/videos/video29.mp4', githubUrl: 'https://github.com/user/projet29' },
  { number: 30, title: 'Multithreading', developer: 'Nom 30', videoUrl: '/videos/video30.mp4', githubUrl: 'https://github.com/user/projet30' },
  { number: 31, title: 'ConstraintLayout Avancé', developer: 'Nom 31', videoUrl: '/videos/video31.mp4', githubUrl: 'https://github.com/user/projet31' },
  { number: 32, title: 'Sauvegarde d\'États', developer: 'Nom 32', videoUrl: '/videos/video32.mp4', githubUrl: 'https://github.com/user/projet32' },
  { number: 33, title: 'Navigation Component', developer: 'Nom 33', videoUrl: '/videos/video33.mp4', githubUrl: 'https://github.com/user/projet33' },
  { number: 34, title: 'Paging Library', developer: 'Nom 34', videoUrl: '/videos/video34.mp4', githubUrl: 'https://github.com/user/projet34' },
  { number: 35, title: 'Tests Unitaires avec JUnit', developer: 'Nom 35', videoUrl: '/videos/video35.mp4', githubUrl: 'https://github.com/user/projet35' },
  { number: 36, title: 'Tests Instrumentés avec Espresso', developer: 'Nom 36', videoUrl: '/videos/video36.mp4', githubUrl: 'https://github.com/user/projet36' },
  { number: 37, title: 'Services Android', developer: 'Nom 37', videoUrl: '/videos/video37.mp4', githubUrl: 'https://github.com/user/projet37' },
];

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
      <header className="text-center mb-5">
        <h2 className="display-4">Mini projets Contrôle pratique programmation mobile</h2>
        <h4 className="text-muted">2ITE ENSA EL JADIDA</h4>
        <h5 className="text-secondary">Encadré par Pr. Mohamed LACHGAR</h5>
      </header>

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