using System;
using System.Collections.Generic;

namespace grievances.Models;

public partial class Complaint
{
    public string Id { get; set; } = null!;

    public string Title { get; set; } = null!;

    public string Complainant { get; set; } = null!;

    public string Description { get; set; } = null!;

    public bool Resolved { get; set; }

    public string? Resolution { get; set; }

    public DateTime Stamp { get; set; }
}
