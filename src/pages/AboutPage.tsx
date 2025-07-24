import React from 'react';
import { Heart, Award, Users, MapPin, Phone, Mail } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About FurryFeast</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Passionate about pets, dedicated to quality - serving Bhopal's pet community with love and care.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Pet store owner with pets"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded by <strong>Nirupam Kumar</strong>, FurryFeast began with a simple mission: to provide 
                the best quality pet food and toys to the loving pet families of Bhopal. As a passionate pet 
                enthusiast myself, I understand the deep bond between pets and their families.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Located in the heart of Bhopal at Aradhana Nagar, we've been serving the local pet community 
                with dedication and care. Every product we sell is carefully selected to ensure your pets get 
                the nutrition and entertainment they deserve.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our commitment goes beyond just selling products - we're here to support you throughout your 
                pet parenting journey with expert advice, quality assurance, and exceptional customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything we do is guided by our core values and commitment to pet welfare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Love for Pets</h3>
              <p className="text-gray-600">
                Every decision we make is driven by our genuine love and care for pets and their well-being.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality First</h3>
              <p className="text-gray-600">
                We source only the highest quality products from trusted brands to ensure your pet's health.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Focus</h3>
              <p className="text-gray-600">
                We're proud to be part of Bhopal's pet community and support local pet families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet the Owner</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl font-bold text-white">NK</span>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Nirupam Kumar</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  "As a lifelong pet lover, I started FurryFeast to bridge the gap between pet parents and 
                  quality pet products in Bhopal. Having grown up with pets, I understand the joy and 
                  responsibility that comes with pet ownership."
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "My goal is to make quality pet care accessible to every family in Bhopal. Whether you're 
                  a first-time pet parent or an experienced one, I'm here to help you give your pets the 
                  best life possible."
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">7783878734</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">nirupamkumar52@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">294, Aradhana Nagar, 462003, Bhopal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-blue-200">Happy Pets</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Satisfied Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Quality Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3+</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;