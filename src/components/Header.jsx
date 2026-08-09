import React from 'react';
import './Header.css'; // optional, see CSS in src/components/Header.css

export default function Header() {
  return (
    <header className="ap-header">
      <a className="ap-brand" href="/">
        <img src="/logo.svg" alt="AP_webdevelopment & solution logo" className="ap-logo" />
        <div className="ap-text">
          <div className="ap-company">AP_webdevelopment &amp; solution</div>
          <div className="ap-tagline">Perfact 3D — Freelance Portfolio</div>
        </div>
      </a>
      <nav className="ap-nav">
        <a href="/#portfolio">Portfolio</a>
        <a href="/#upload">Upload</a>
        <a href="/#contact">Contact</a>
      </nav>
    </header>
  );
}
