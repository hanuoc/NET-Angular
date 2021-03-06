﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Data;
using WebApi.DTOs;

namespace WebApi.Controller
{
    [Authorize]
    [Route("api/values")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public ValuesController(DataContext context, IMapper mapper)
        {
            _context = context;
            this._mapper = mapper;
        }
        // GET: api/Values
        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> GetValues()
        {
            var values = await _context.Values.ToListAsync();
            var valuesToReturn = _mapper.Map<IEnumerable<ValueForListDto>>(values);
            return Ok(valuesToReturn);
        }

        // GET: api/Values/5
        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task <IActionResult> GetValue(int id)
        {
            var value = await _context.Values.FirstOrDefaultAsync(x => x.Id == id);
            return Ok(value);
        }

        // POST: api/Values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
