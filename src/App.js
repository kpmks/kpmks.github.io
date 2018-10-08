import React, { Component } from 'react';
import logo from './assets/images/logo.jpg';
import './assets/css/main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <input type="hidden" name="salam!" value="apa boscu?" />
        <header>
            <img src={logo} alt="logo kpm" width="150" height="150" />
            <div className="">
                <h1>Komunitas Programmer Makassar</h1>
                <h2>Kumpul-kumpulki' disini</h2>
                <a href="https://www.facebook.com/groups/1710616582489607/">Group Facebook</a>
                <h3>Dokumentasi Kegiatan</h3>
                <a href="https://drive.google.com/drive/folders/1UafjzXwk3vQ9Ke3ykR216ycr1fvHT3UW?usp=sharing">GDrive</a>
            </div>
        </header>

        <hr />
        <section id="prev-meetup">
            <p>Meetup sebelumnya</p>
            <ul>
                <li>Komplikasi kehidupan programmer - Rahmat Ramadhan  <a href="/assets/slides/kompilkasi-programmer-jimmy.pdf" target="_blank">Slide</a> <br />
                     Clean Code - Rahmat Hidayat </li>
                <li>MVC codeigniter - Ito Rijal  <br />
                    MVC Android - Fordyta Dytho  <br />
                    Laravel - Aliem <br />
                    <time>5 Maret 2017</time> </li>
                <li>Pengenalan DevOps - Asrar Abu Khair  <br />
                    Server untuk pengembangan aplikasi - Musa Amin <br />
                    <time> 12 November 2016</time> </li>
                <li>Kenalan firebase - Hilman  <br />
                    <time>14 Oktober 2017</time></li>
                <li>ReactJS#1 Meetup - Renaldi Pratama <br /> <time>10 Maret 2018</time></li>
                <li>Introduction to PWA - Muhammad Aryandi<br /> <time>17 Maret 2018</time></li>
                <li>Oon Arfiandwi
                  <a
                  href="https://docs.google.com/presentation/d/115-rDaG79Wn5Q0wvCE7Zhkqf0DWSxmHb9f_oWF6wNS4/edit#slide=id.p"
                  target="_blank">
                    Slide
                  </a>
                  <br />
                  <time>24 Maret 2018</time>
                </li>

            </ul>
        </section>
        <hr />
      </div>
    );
  }
}

export default App;
