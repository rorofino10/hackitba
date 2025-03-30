import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface SkinItem {
  id: number;
  name: string;
  image: string;
  price: number;
  owned: boolean;
  category: string;
}

@Component({
  selector: 'app-appearance',
  imports: [CommonModule],
  templateUrl: './appearance.component.html',
  styleUrl: './appearance.component.css',
})
export class AppearanceComponent implements OnInit {
  categories: string[] = [
    'Sombreros',
    'Anteojos',
    'Remeras',
    'Guantes',
    'Collar',
  ];
  selectedCategory: string = 'Sombreros';

  skinItems: SkinItem[] = [
    {
      id: 1,
      name: 'Gorro de Santa',
      image: 'santa-hat.png',
      price: 15,
      owned: false,
      category: 'Sombreros',
    },
    {
      id: 2,
      name: 'Gorro Party',
      image: 'party-hat.png',
      price: 15,
      owned: true,
      category: 'Sombreros',
    },
    {
      id: 3,
      name: 'Gorro de graduado',
      image: 'graduation-hat.png',
      price: 15,
      owned: false,
      category: 'Sombreros',
    },
    {
      id: 4,
      name: 'Sombrero de bruja',
      image: 'witch-hat.png',
      price: 15,
      owned: false,
      category: 'Sombreros',
    },
    {
      id: 5,
      name: 'Sombrero de vaquero',
      image: 'cowboy-hat.png',
      price: 15,
      owned: false,
      category: 'Sombreros',
    },
    {
      id: 6,
      name: 'Gorro de detective',
      image: 'detective-hat.png',
      price: 15,
      owned: false,
      category: 'Sombreros',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  getFilteredItems(): SkinItem[] {
    return this.skinItems.filter(
      (item) => item.category === this.selectedCategory
    );
  }

  buySkin(item: SkinItem): void {
    // Aquí iría la lógica para comprar el skin
    // Por ahora solo cambiamos el estado a "owned"
    const index = this.skinItems.findIndex((skin) => skin.id === item.id);
    if (index !== -1) {
      this.skinItems[index].owned = true;
    }
  }
}
