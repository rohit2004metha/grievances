using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using grievances.Models;

namespace grievances.Data;

public partial class GrievancesContext : DbContext
{
    public GrievancesContext()
    {
    }

    public GrievancesContext(DbContextOptions<GrievancesContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Complaint> Complaints { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
// #warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySQL("server=localhost;uid=root;pwd=shree;database=grievances");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Complaint>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("complaints");

            entity.Property(e => e.Id)
                .HasMaxLength(50)
                .HasColumnName("id");
            entity.Property(e => e.Complainant)
                .HasMaxLength(255)
                .HasColumnName("complainant");
            entity.Property(e => e.Description)
                .HasMaxLength(1500)
                .HasColumnName("description");
            entity.Property(e => e.Resolution)
                .HasMaxLength(1000)
                .HasColumnName("resolution");
            entity.Property(e => e.Resolved).HasColumnName("resolved");
            entity.Property(e => e.Stamp)
                .HasColumnType("datetime")
                .HasColumnName("stamp");
            entity.Property(e => e.Title)
                .HasMaxLength(255)
                .HasColumnName("title");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}