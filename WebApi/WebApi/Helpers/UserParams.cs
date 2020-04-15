﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Helpers
{
    public class UserParams
    {
        public const int MaxPageSize = 50;
        public int PageNumber { get; set; } = 1;
        private int pageSize { get; set; }
        public int PageSize
        {
            get { return pageSize; } 
            set{pageSize = (value > MaxPageSize) ? MaxPageSize : value; 
        }
    }
}
