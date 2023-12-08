import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Category {
  categoryId: number | undefined;
  categoryName: string | undefined;
}

@Injectable({
  providedIn: 'root'
})
export class CategoryDataService {

  public categories: Category[] = [];
    baseUrl: string;

    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this.http = http;
        this.baseUrl = baseUrl;
    }

    getCategories(): Observable<any[]> {
      return this.http.get<any[]>(`https://localhost:7217/api/Categories`);
    }

    showAll() {
      this.http.get<Category[]>(`https://localhost:7217/api/Categories`).subscribe(result => {
        //this.categories = result;
        this.categories.length = 0;
        this.categories.push(...result as Category[]);
        console.log(result);
      }, error => console.error(error));
    }
   

    addCategory(newCategory: Category) {
      const body = {
        categoryName: newCategory  // Предполагаем, что имя категории находится в поле categoryName
      };
      console.log(newCategory);
      this.http.post(`https://localhost:7217/api/Categories`, body).subscribe(
        result => {
          this.showAll();
        },
        error => console.error('Error adding category:', error)
      );
    }
   /*
  addCategory(newCategory: Category) {
    console.log('Тело запроса:', newCategory);

    const body = {
      categoryName: newCategory
    };

    const headers = { 'Content-Type': 'application/json' };

    this.http.post(`https://localhost:7217/api/Categories`, body, { headers })
      .subscribe(
        result => {
          this.showAll();
        },
        error => {
          console.error('Ошибка при добавлении категории:', error);
        }
      );
  }
   */

    updateCategory(categoryId: number, categoryName: string): Observable<any> {
      const body = {
        categoryId: categoryId,
        categoryName: categoryName
      };
      console.log("categoryData:",categoryId,categoryName);
      return this.http.put(`https://localhost:7217/api/Categories/${categoryId}`, body);
    }

   
    deleteCategory(categoryId: number): void {
      this.http.delete(`https://localhost:7217/api/Categories/${categoryId}`).subscribe(
        result => {
          this.showAll();
        },
        error => console.error(error)
      );
    }
}  
