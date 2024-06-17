import { Component, HostListener } from '@angular/core';
import { QAS } from '../constants/questions';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgIf],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent {
  currentIndex = 0;
  showAnswer = false;
  questions = QAS;

  toggleAnswer() {
    this.showAnswer = !this.showAnswer;
  }

  prevQuestion() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.showAnswer = false;
    }
  }

  nextQuestion() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      this.showAnswer = false;
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      this.prevQuestion();
    } else if (event.key === 'ArrowRight') {
      this.nextQuestion();
    }
  }
}
