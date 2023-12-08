using System;
using System.Collections.Generic;
using CoreMVCAngularExam.Models;
using Microsoft.EntityFrameworkCore;

namespace CoreMVCAngularExam.Data;

public partial class CoreMVCAngularExamContext : DbContext
{
   // private readonly CoreMVCAngularExamContext _context;
    public CoreMVCAngularExamContext()
    {
    }

    public CoreMVCAngularExamContext(DbContextOptions<CoreMVCAngularExamContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Category> Categories { get; set; }

    public virtual DbSet<Contact> Contacts { get; set; }

    public virtual DbSet<PhoneNumber> PhoneNumbers { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) { }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        OnModelCreatingPartial(modelBuilder);
    }

    //public IEnumerable<Contact> GetContactsWithDetails()
    //{
    //    // Реализация метода, возвращающего контакты с дополнительными данными.
    //    // Например, вы можете использовать LINQ для объединения данных из разных таблиц.

    //    // Пример:
    //    var contactsWithDetails = _context.Contacts
    //        .Include(c => c.CategoryId)
    //        .Include(c => c.PhoneId)
    //        .ToList();

    //    return contactsWithDetails;
    //}

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
