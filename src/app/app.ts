import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Work } from './components/work/work';
import { Skills } from './components/skills/skills';
import { About } from './components/about/about';
import { Resume } from './components/resume/resume';
import { Hobbies } from './components/hobbies/hobbies';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, Work, Skills, About, Resume, Hobbies, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
