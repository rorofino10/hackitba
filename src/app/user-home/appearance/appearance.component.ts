import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { StudentService } from '../../shared/services/student.service';
import { BackButtonComponent } from '../../components/back-button/back-button.component';

interface SkinItem {
  id: number;
  name: string;
  image: string;
  price: number;
  state: 'owned' | 'buy' | 'equipped';
  category: string;
}

@Component({
  selector: 'app-appearance',
  imports: [CommonModule, BackButtonComponent],
  templateUrl: './appearance.component.html',
  styleUrl: './appearance.component.css',
})
export class AppearanceComponent implements OnInit {
  categories: string[] = [
    'Avatares',
    'Sombreros',
    'Remeras',
    'Guantes',
    'Collar',
  ];
  selectedCategory: string = 'Avatares';

  skinItems: SkinItem[] = [
    {
      id: 7,
      name: 'Monstruo',
      image: 'monstruo.jpg',
      price: 15,
      state: 'owned',
      category: 'Avatares',
    },
    {
      id: 8,
      name: 'Fantasma',
      image: 'fantasma.png',
      price: 18,
      state: 'buy',
      category: 'Avatares',
    },
    {
      id: 9,
      name: 'Chill Guy',
      image:
        'https://img.freepik.com/vector-gratis/ilustracion-nino-pelirrojo-sonriente_1308-176664.jpg?t=st=1743323794~exp=1743327394~hmac=c8be40269a50e0031d8918ac5764a5a0ba5714dd858d73ff7678da347b409d78&w=826',
      price: 20,
      state: 'equipped',
      category: 'Avatares',
    },
    {
      id: 1,
      name: 'Gorro de Santa',
      image: 'santa-hat.png',
      price: 15,
      state: 'buy',

      category: 'Sombreros',
    },
    {
      id: 2,
      name: 'Gorro Party',
      image: 'party-hat.png',
      price: 15,
      state: 'buy',

      category: 'Sombreros',
    },
    {
      id: 3,
      name: 'Gorro de graduado',
      image: 'graduation-hat.png',
      price: 15,
      state: 'buy',

      category: 'Sombreros',
    },
    {
      id: 4,
      name: 'Sombrero de bruja',
      image: 'witch-hat.png',
      price: 15,
      state: 'buy',

      category: 'Sombreros',
    },
    {
      id: 5,
      name: 'Sombrero de vaquero',
      image: 'cowboy-hat.png',
      price: 15,
      state: 'buy',

      category: 'Sombreros',
    },
    {
      id: 6,
      name: 'Gorro de detective',
      image: 'detective-hat.png',
      price: 15,
      state: 'buy',

      category: 'Sombreros',
    },
  ];

  constructor() {}

  studentService = inject(StudentService);

  ngOnInit(): void {}

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  getFilteredItems(): SkinItem[] {
    return this.skinItems.filter(
      (item) => item.category === this.selectedCategory
    );
  }

  equipSkin(item: SkinItem) {
    console.log('E');
    console.log(this.studentService.student);
    console.log(this.studentService.student());
    this.skinItems.forEach((skin) => {
      if (skin.state == 'equipped') skin.state = 'owned';
    });
    item.state = 'equipped';
    switch (item.category) {
      case 'Avatares':
        const student = this.studentService.student;
        this.studentService.firestoreService.updateStudent(student().id, {
          ...student(),
          img: item.image,
        });
        break;

      default:
        break;
    }
  }
  buySkin(item: SkinItem): void {
    // Aquí iría la lógica para comprar el skin
    // Por ahora solo cambiamos el estado a "owned"
    const index = this.skinItems.findIndex((skin) => skin.id === item.id);

    if (index !== -1) {
      this.skinItems[index].state = 'owned';
    }
  }
}
