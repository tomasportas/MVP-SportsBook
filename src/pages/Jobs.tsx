import React from 'react';
import { Briefcase, MapPin, Building2 } from 'lucide-react';
import { mockJobs } from '../data/mockData';

export function Jobs() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Opportunities</h1>
      <div className="grid gap-6">
        {mockJobs.map(job => (
          <div key={job.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold">{job.title}</h2>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Building2 size={18} className="mr-2" />
                    {job.organization}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin size={18} className="mr-2" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Briefcase size={18} className="mr-2" />
                    {job.type}
                  </div>
                </div>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Apply Now
              </button>
            </div>
            
            <div className="mt-4">
              <p className="text-gray-600">{job.description}</p>
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Requirements:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}