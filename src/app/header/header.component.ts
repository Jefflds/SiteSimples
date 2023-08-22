import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  ngOnInit() {
    this.addSmoothScrollBehavior();
  }
  
  addSmoothScrollBehavior() {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    for (const link of Array.from(smoothScrollLinks)) {
      if (link instanceof HTMLAnchorElement) {
        link.addEventListener('click', (e) => this.handleSmoothScroll(e, link));
      }
    }
  }
  
  handleSmoothScroll(e: Event, link: HTMLAnchorElement) {
    e.preventDefault();
    
    const targetId = link.getAttribute('href');
    
    if (targetId) {
      const targetElement = document.querySelector(targetId);
      
      if (targetElement instanceof HTMLElement) {
        const yOffset = -50; // Ajuste opcional para o posicionamento do elemento após a rolagem
        const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }

}
