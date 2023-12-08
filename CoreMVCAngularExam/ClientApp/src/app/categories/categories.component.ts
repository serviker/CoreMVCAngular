import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryDataService, Category } from './categorydata.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AddCategoryDialogComponent } from './addNewCategory.component';
import { EditCategoryDialogComponent } from '../edit-category-dialog/edit-category-dialog.component';

@Component({
  selector: 'categories', 
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})

export class CategoriesComponent implements OnInit {
  public categories: Category[] | undefined;
    http: any;
    snackBar: any;

  constructor(private categoryDataSrv: CategoryDataService, private dialog: MatDialog) {
    }
    
  ngOnInit() {
    this.showAll();
      /*this.categories = this.categoryDataSrv.categories;*/
    }
    
    showAll() {
      this.categoryDataSrv.showAll();
      this.categories = this.categoryDataSrv.categories;
    }

  addCategory() {
    // Открываем диалоговое окно для добавления контакта
    const dialogRef = this.dialog.open(AddCategoryDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Данные из диалога:', result);
        this.categoryDataSrv.addCategory(result);
        // Дополнительные действия
      } else {
        console.log('Диалог закрыт без данных');
      }
    });
  }

  deleteCategory(categoryId: number): void {

    this.categoryDataSrv.deleteCategory(categoryId);
  }

  updateCategory(categoryId: number | undefined, categoryName: string | undefined): void {
    if (categoryId === undefined || !categoryName) {
      // Отобразить сообщение об ошибке пользователю, что categoryId не определен
      return;
    }

    const dialogRef = this.dialog.open(EditCategoryDialogComponent, {
      data: { categoryId, categoryName }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.categoryId && result.categoryName) {
        this.categoryDataSrv.updateCategory(result.categoryId, result.categoryName)
          .subscribe(
            response => {
              this.showAll();
            },
            error => {

              if (error instanceof HttpErrorResponse) {

                if (error.error.errors && error.error.errors.CategoryName) {

                  // Отобразить сообщение об ошибке пользователю
                  // Например, используя Angular Material Snackbar
                  this.snackBar.open('Validation error: ' + error.error.errors.CategoryName[0], 'Close', {
                    duration: 5000,
                  });
                }
              }
            }
          );
      }
    });
  }
  
}
