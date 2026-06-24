export type DietaryFlag = "GF" | "V" | "VE" | "DF" | "N";
export type HeatLevel = 0 | 1 | 2 | 3;

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  dietary: DietaryFlag[];
  heat: HeatLevel;
  featured: boolean;
  image?: string;
  available: boolean;
}

export interface MenuSection {
  id: string;
  label: string;
  eyebrow?: string;
  items: MenuItem[];
}

export interface MenuData {
  breakfast: MenuSection;
  allDay: MenuSection;
  poboys: MenuSection;
  sides: MenuSection;
  desserts: MenuSection;
  drinks: MenuSection;
}
