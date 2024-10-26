import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap for styling
import './VideoGallery.css'; // Optional CSS for additional styling

const projects = [
  { number: 1, title: 'Interface graphique', developer: 'Nom 1', videoUrl: 'video1.mp4', githubUrl: 'https://github.com/user/projet1' },
  { number: 2, title: 'Pizza', developer: 'Nom 2', videoUrl: 'video2.mp4', githubUrl: 'https://github.com/user/projet2' },
  { number: 3, title: 'TabHost', developer: 'Nom 3', videoUrl: 'video3.mp4', githubUrl: 'https://github.com/user/projet3' },
  { number: 4, title: 'RecyclerView', developer: 'Nom 4', videoUrl: 'video4.mp4', githubUrl: 'https://github.com/user/projet4' },
  { number: 5, title: 'Volley + Image', developer: 'Nom 5', videoUrl: 'video5.mp4', githubUrl: 'https://github.com/user/projet5' },
  { number: 6, title: 'Localisation', developer: 'Nom 6', videoUrl: 'video6.mp4', githubUrl: 'https://github.com/user/projet6' },
  { number: 7, title: 'Map + Volley', developer: 'Nom 7', videoUrl: 'video7.mp4', githubUrl: 'https://github.com/user/projet7' },
  { number: 8, title: 'SQLite', developer: 'Nom 8', videoUrl: 'video8.mp4', githubUrl: 'https://github.com/user/projet8' },
  { number: 9, title: 'Fragment', developer: 'Nom 9', videoUrl: 'video9.mp4', githubUrl: 'https://github.com/user/projet9' },
  { number: 10, title: 'Navigation Drawer', developer: 'Nom 10', videoUrl: 'video10.mp4', githubUrl: 'https://github.com/user/projet10' },
  { number: 11, title: 'Notifications', developer: 'Nom 11', videoUrl: 'video11.mp4', githubUrl: 'https://github.com/user/projet11' },
  { number: 12, title: 'Capteurs', developer: 'Nom 12', videoUrl: 'video12.mp4', githubUrl: 'https://github.com/user/projet12' },
  { number: 13, title: 'Retrofit', developer: 'Nom 13', videoUrl: 'video13.mp4', githubUrl: 'https://github.com/user/projet13' },
  { number: 14, title: 'Room', developer: 'Nom 14', videoUrl: 'video14.mp4', githubUrl: 'https://github.com/user/projet14' },
  { number: 15, title: 'TabLayout + ViewPager/Fragment', developer: 'Nom 15', videoUrl: 'video15.mp4', githubUrl: 'https://github.com/user/projet15' },
  { number: 16, title: 'LiveData + ViewModel', developer: 'Nom 16', videoUrl: 'video16.mp4', githubUrl: 'https://github.com/user/projet16' },
  { number: 17, title: 'Data Binding', developer: 'Nom 17', videoUrl: 'video17.mp4', githubUrl: 'https://github.com/user/projet17' },
  { number: 18, title: 'Firebase', developer: 'Nom 18', videoUrl: 'video18.mp4', githubUrl: 'https://github.com/user/projet18' },
  { number: 19, title: 'Coroutines', developer: 'Nom 19', videoUrl: 'video19.mp4', githubUrl: 'https://github.com/user/projet19' },
  { number: 20, title: 'WorkManager', developer: 'Nom 20', videoUrl: 'video20.mp4', githubUrl: 'https://github.com/user/projet20' },
  { number: 21, title: 'Bluetooth', developer: 'Nom 21', videoUrl: 'video21.mp4', githubUrl: 'https://github.com/user/projet21' },
  { number: 22, title: 'Camera API', developer: 'Nom 22', videoUrl: 'video22.mp4', githubUrl: 'https://github.com/user/projet22' },
  { number: 23, title: 'ExoPlayer', developer: 'Nom 23', videoUrl: 'video23.mp4', githubUrl: 'https://github.com/user/projet23' },
  { number: 24, title: 'Firebase Cloud Messaging', developer: 'Nom 24', videoUrl: 'video24.mp4', githubUrl: 'https://github.com/user/projet24' },
  { number: 25, title: 'Jetpack Compose', developer: 'Nom 25', videoUrl: 'video25.mp4', githubUrl: 'https://github.com/user/projet25' },
  { number: 26, title: 'Permissions Runtime', developer: 'Nom 26', videoUrl: 'video26.mp4', githubUrl: 'https://github.com/user/projet26' },
  { number: 27, title: 'Gesture Detection', developer: 'Nom 27', videoUrl: 'video27.mp4', githubUrl: 'https://github.com/user/projet27' },
  { number: 28, title: 'Lottie Animations', developer: 'Nom 28', videoUrl: 'video28.mp4', githubUrl: 'https://github.com/user/projet28' },
  { number: 29, title: 'NFC', developer: 'Nom 29', videoUrl: 'video29.mp4', githubUrl: 'https://github.com/user/projet29' },
  { number: 30, title: 'Multithreading', developer: 'Nom 30', videoUrl: 'video30.mp4', githubUrl: 'https://github.com/user/projet30' },
  { number: 31, title: 'ConstraintLayout Avancé', developer: 'Nom 31', videoUrl: 'video31.mp4', githubUrl: 'https://github.com/user/projet31' },
  { number: 32, title: 'Sauvegarde d\'États', developer: 'Nom 32', videoUrl: 'video32.mp4', githubUrl: 'https://github.com/user/projet32' },
  { number: 33, title: 'Navigation Component', developer: 'Nom 33', videoUrl: 'video33.mp4', githubUrl: 'https://github.com/user/projet33' },
  { number: 34, title: 'Paging Library', developer: 'Nom 34', videoUrl: 'video34.mp4', githubUrl: 'https://github.com/user/projet34' },
  { number: 35, title: 'Tests Unitaires avec JUnit', developer: 'Nom 35', videoUrl: 'video35.mp4', githubUrl: 'https://github.com/user/projet35' },
  { number: 36, title: 'Tests Instrumentés avec Espresso', developer: 'Nom 36', videoUrl: 'video36.mp4', githubUrl: 'https://github.com/user/projet36' },
  { number: 37, title: 'Services Android', developer: 'Nom 37', videoUrl: 'video37.mp4', githubUrl: 'https://github.com/user/projet37' },
];

const VideoGallery = () => {
  return (
    <div className="container my-5">
      <header className="text-center mb-5">
        <h1 className="display-4">Mini projets Contrôle pratique programmation mobile</h1>
        <h3 className="text-muted">2ITE ENSA EL JADIDA</h3>
        <h5 className="text-secondary">Encadré par Pr. Mohamed LACHGAR</h5>
      </header>
      
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100 shadow border-0 rounded">
              <video width="100%" controls className="card-img-top rounded-top">
                <source src={project.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
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
    </div>
  );
};

export default VideoGallery;