import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function AutomationServicesWebsite() {
  const [orders, setOrders] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.service) return;

    setOrders([...orders, { ...formData, id: Date.now() }]);

    // Simulated email notification
    console.log("New Order Received:", formData);

    alert("Order submitted successfully! You will be contacted soon.");

    setFormData({ name: "", email: "", service: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold">Automation & Website Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional automation systems and modern websites built to grow your business.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="rounded-2xl px-8 py-6 text-lg shadow-lg">Get Started</Button>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="rounded-2xl px-8 py-6 text-lg shadow-lg">
                Order on WhatsApp
              </Button>
            </a>
          </div>
        </motion.section>

        {/* Services */}
        <section className="grid md:grid-cols-2 gap-8">
          <Card className="rounded-2xl shadow-lg">
            <CardContent className="p-8 space-y-4">
              <h2 className="text-2xl font-semibold">Automation Messages</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>WhatsApp / Instagram Auto Reply</li>
                <li>Lead Capture Bots</li>
                <li>Email Automation</li>
                <li>Follow-up Sequences</li>
              </ul>
              <p className="text-xl font-bold">₹4,999 – ₹9,999</p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-lg">
            <CardContent className="p-8 space-y-4">
              <h2 className="text-2xl font-semibold">Website Creation</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Landing Page</li>
                <li>Business Website</li>
                <li>Portfolio Website</li>
                <li>Mobile Responsive + SEO</li>
              </ul>
              <p className="text-xl font-bold">₹14,999 – ₹35,000</p>
            </CardContent>
          </Card>
        </section>

        {/* Order Form */}
        <section className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Place Your Order</h2>
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <Input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            <Input
              name="email"
              placeholder="Your Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              name="service"
              placeholder="Service Needed (Automation / Website)"
              className="md:col-span-2"
              value={formData.service}
              onChange={handleChange}
            />
            <Textarea
              name="message"
              placeholder="Describe Your Project"
              className="md:col-span-2"
              value={formData.message}
              onChange={handleChange}
            />
            <Button
              type="submit"
              className="md:col-span-2 rounded-2xl py-6 text-lg shadow-md"
            >
              Submit Order
            </Button>
          </form>
        </section>

        {/* Admin Dashboard */}
        <section className="bg-gray-100 rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h2>
          <Tabs defaultValue="orders">
            <TabsList className="grid grid-cols-1 mb-6">
              <TabsTrigger value="orders">Orders</TabsTrigger>
            </TabsList>
            <TabsContent value="orders">
              {orders.length === 0 ? (
                <p className="text-center text-gray-500">No orders yet.</p>
              ) : (
                <div className="space-y-4">
                  {orders.map((order) => (
                    <Card key={order.id} className="rounded-2xl">
                      <CardContent className="p-6 space-y-2">
                        <p><strong>Name:</strong> {order.name}</p>
                        <p><strong>Email:</strong> {order.email}</p>
                        <p><strong>Service:</strong> {order.service}</p>
                        <p><strong>Message:</strong> {order.message}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Automation Services. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
