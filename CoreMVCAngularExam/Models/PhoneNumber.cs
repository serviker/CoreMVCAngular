using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace CoreMVCAngularExam.Models;

[Table("PhoneNumber")]
public partial class PhoneNumber
{
    [Key]
    [Column("phone_id")]
    public int PhoneId { get; set; }

    [Column("phone_number")]
    [StringLength(11)]
    public string NumberPhone { get; set; } = null!;

}
