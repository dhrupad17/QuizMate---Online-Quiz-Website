import React from "react";

const Home = () => {
  return (
    <main className="container text-center my-5">
      <h2 className="mt-5">Welcome to QuizMate</h2>
      <p className="lead mt-3">
        Your ultimate companion for mastering technological subjects through engaging online quizzes.
      </p>
      <div className="row mt-5">
        <div className="col-md-4 mb-4">
          <div className="card h-100 border-primary">
            <div className="card-body bg-light">
              <h5 className="card-title">Diverse Topics</h5>
              <p className="card-text">
                Explore quizzes on Programming Languages, Technology and more.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 border-primary">
            <div className="card-body bg-light">
              <h5 className="card-title">Track Progress</h5>
              <p className="card-text">
                Monitor your progress and challenge yourself to improve.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 border-primary">
            <div className="card-body bg-light">
              <h5 className="card-title">Join Community</h5>
              <p className="card-text">
                Connect with fellow learners and stay ahead in tech.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
