using AutoMapper;
using Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace App.CommonCore
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            //map the db obj of joblisting type to the edited joblisting
            CreateMap<Joblisting, Joblisting>();
        }


    }
}
