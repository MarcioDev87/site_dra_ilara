import './style.css';
import { 
  createIcons, 
  MapPin, 
  Clock, 
  HeartHandshake, 
  Sparkles, 
  Calendar, 
  Menu, 
  Star, 
  MessageCircle, 
  ArrowDown, 
  Heart, 
  ShieldCheck, 
  UserCheck, 
  Smile, 
  Check, 
  Globe 
} from 'lucide';
import confetti from 'canvas-confetti';

// Initialize Lucide Icons
function initIcons() {
  createIcons({
    icons: {
      MapPin,
      Clock,
      HeartHandshake,
      Sparkles,
      Calendar,
      Menu,
      Star,
      MessageCircle,
      ArrowDown,
      Heart,
      ShieldCheck,
      UserCheck,
      Smile,
      Check,
      Globe
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initIcons();
  initHeader();
  initQuiz();
});

// Header Scroll & Mobile Toggle
function initHeader() {
  const header = document.getElementById('header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }
}

// Simple Quiz to WhatsApp
function initQuiz() {
  const step1 = document.getElementById('step-1');
  const stepResult = document.getElementById('step-result');
  const progressFill = document.getElementById('quiz-progress');
  const summaryText = document.getElementById('quiz-summary-text');
  const whatsappBtn = document.getElementById('quiz-whatsapp-btn');
  const optionBtns = document.querySelectorAll('.quiz-option-btn');

  optionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.getAttribute('data-val');

      if (step1 && stepResult) {
        step1.classList.remove('active');
        stepResult.classList.add('active');
        progressFill.style.width = '100%';

        summaryText.innerHTML = `Sua opção selecionada: <strong>${val}</strong>. Clique abaixo para marcar sua consulta via WhatsApp.`;
        
        if (whatsappBtn) {
          whatsappBtn.href = `https://api.whatsapp.com/send?phone=5585985133439&text=${encodeURIComponent('Olá! Gostaria de marcar uma consulta na Clínica Dra. Ilara Queiroz. Interesse: ' + val)}`;
        }

        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    });
  });
}
