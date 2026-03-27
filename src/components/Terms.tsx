import { motion } from 'motion/react';

export default function Terms() {
  return (
    <section id="terms" className="py-24 bg-gray-50 dark:bg-zinc-950 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold-600 dark:text-gold-400 uppercase tracking-[0.2em] text-sm font-medium">
            Important Information
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-gray-900 dark:text-white mt-3">
            Terms & <span className="text-gold-500">Conditions</span>
          </h2>
          <h3 className="text-xl text-gray-600 dark:text-gray-400 mt-4 font-light flex items-center justify-center gap-2">
            <span className="font-bold tracking-tight text-gray-900 dark:text-white">SHREE</span>
            <span className="text-gold-500 font-bold">.</span>
            <span className="text-sm uppercase tracking-widest text-gray-500">Self Driving & Rentals</span>
          </h3>
        </div>

        <div className="space-y-12 text-gray-700 dark:text-gray-300 leading-relaxed font-light">
          
          {/* Section 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 border-l-4 border-gold-500 pl-4">1. Booking Duration & KM Limit</h4>
            <p>
              Booking starts from the reserved time and the rental day is calculated every 24 hours.
              A limit of <strong className="text-gray-900 dark:text-white font-semibold">300 KM per day average</strong> is allowed. If the KM limit exceeds, 
              additional charges per kilometer will be applied according to the car’s per day rate.
            </p>
          </motion.div>

          {/* Section 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 border-l-4 border-gold-500 pl-4">2. Grace Period</h4>
            <p>
              Considering traffic or unavoidable situations, Shree Self Driving & Car Rental Service provides 
              a <strong className="text-gray-900 dark:text-white font-semibold">1-hour grace period</strong>. After the grace period, an entire day charge will be applicable.
            </p>
          </motion.div>

          {/* Section 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 border-l-4 border-gold-500 pl-4">3. Before Trip – Mandatory Photos / Videos</h4>
            <p>
              Before starting your journey, you must take photos or videos of the vehicle to record any 
              existing scratches, dents, or damages. You must also take a photo of the speedometer and fuel 
              level and send it to the Shree Self Driving & Car Rental Service operator.
            </p>
          </motion.div>

          {/* Section 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 border-l-4 border-gold-500 pl-4">4. Fuel Policy</h4>
            <p>
              The same fuel level must be maintained while returning the vehicle. If the fuel level is lower, 
              you will be charged accordingly. If it is higher, no refund will be provided. Customers must take 
              a photo of the fuel meter and share it with the operator.
            </p>
          </motion.div>

          {/* Section 5 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 border-l-4 border-gold-500 pl-4">5. Vehicle Return Location</h4>
            <p>
              The vehicle must be returned at the same location where it was handed over unless another 
              location is agreed upon by Shree Self Driving & Car Rental Service. Additional charges may apply.
            </p>
          </motion.div>

          {/* Section 6 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 border-l-4 border-gold-500 pl-4">6. Tyres Responsibility</h4>
            <p>
              Shree Self Driving & Car Rental Service is not responsible for tyre punctures, flat tyres, or 
              any tyre damage during the rental period. Any damage related to tyres will be borne by the customer. 
              Customers are advised to take photos or videos of tyre conditions before starting the trip.
            </p>
          </motion.div>

          {/* Section 7 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 border-l-4 border-gold-500 pl-4">7. Mechanical Warranty</h4>
            <p>
              All vehicles are maintained in our own workshop. We provide warranty for the mechanical 
              functioning of the car except for tyres.
            </p>
          </motion.div>

          {/* Section 8 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 border-l-4 border-gold-500 pl-4">8. Damage Responsibility</h4>
            <p>
              If any damage, scratch, or dent occurs while the car is in your possession, the entire repair 
              cost will be borne by the customer.
            </p>
          </motion.div>

          {/* Section 9 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 border-l-4 border-gold-500 pl-4">9. Major Damage</h4>
            <p>
              In case of major damage, the payable amount will be decided considering insurance terms and 
              mutual agreement between Shree Self Driving & Car Rental Service and the customer.
            </p>
          </motion.div>

          {/* Section 10 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 border-l-4 border-gold-500 pl-4">10. Garage / Service Delay Charges</h4>
            <p>
              If the vehicle needs repair due to damage during the rental period, 
              <strong className="text-gray-900 dark:text-white font-semibold"> 50% of the daily rent</strong> will be charged for the period the car remains 
              in the garage or service center.
            </p>
          </motion.div>

          {/* Section 11 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 border-l-4 border-gold-500 pl-4">11. Fastag Recharge</h4>
            <p>
              Fastag recharge must be done by the customer using Fastag Scanner, GPay, Paytm, PhonePe, 
              Net Banking, etc. If existing balance is used, the amount will be paid by the customer or 
              deducted from the security deposit. Any extra recharge done by the customer will not be reimbursed.
            </p>
          </motion.div>

          {/* Section 12 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 border-l-4 border-gold-500 pl-4">12. Speed Limit Rules</h4>
            <p>
              The maximum speed limit allowed is <strong className="text-gray-900 dark:text-white font-semibold">100 KM/Hr</strong>. Exceeding this speed will attract 
              a fine of <strong className="text-gray-900 dark:text-white font-semibold">₹500 per attempt</strong>. Customers must also follow speed limits set by the RTO. 
              Violations captured by RTO cameras may result in a fine of <strong className="text-gray-900 dark:text-white">₹2000</strong>.
            </p>
          </motion.div>

          {/* Section 13 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 border-l-4 border-gold-500 pl-4">13. Extension of Rental Days</h4>
            <p>
              Customers must inform us in advance and make payment for extended days after confirming vehicle availability. 
              If the car is not returned on time, a fine of <strong className="text-gray-900 dark:text-white font-semibold">₹5000 or more</strong> may apply. 
              A <strong className="text-gray-900 dark:text-white font-semibold">₹500 per day fine</strong> will be charged for delayed payment of extended days. 
              Security deposit will not be considered as rent during extension.
            </p>
          </motion.div>

          {/* Section 14 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 border-l-4 border-gold-500 pl-4">14. Cancellation Policy</h4>
            <p>
              If cancellation is informed <strong className="text-gray-900 dark:text-white font-semibold">2 days before the journey date</strong>, 50% of the rent will be deducted 
              (if full advance payment was made). Cancellation within <strong className="text-gray-900 dark:text-white font-semibold">48 hours</strong> is not eligible for refund. 
              If only partial booking amount was paid, the full rent for the booked days must be paid. 
              No refund will be provided for ongoing bookings or partial cancellations.
            </p>
          </motion.div>

          {/* Section 15 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 border-l-4 border-gold-500 pl-4">15. Cleaning Charges</h4>
            <p className="mb-2">If the car is returned dirty after being delivered in clean condition:</p>
            <ul className="list-disc list-inside mb-4 ml-4 space-y-1">
              <li>₹300 – Hatchback</li>
              <li>₹300 – Sedan</li>
            </ul>

            <p className="mb-2">Additional penalties:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><strong className="text-gray-900 dark:text-white font-semibold">₹1000</strong> – Smoking or drinking inside the car</li>
              <li><strong className="text-gray-900 dark:text-white font-semibold">₹1000</strong> – Pan / gutka spitting inside the car</li>
              <li><strong className="text-gray-900 dark:text-white font-semibold">₹2000</strong> – Decoration, stickers, or adhesive tapes</li>
              <li><strong className="text-gray-900 dark:text-white font-semibold">₹2000</strong> – Animal fur or dirt inside the car</li>
            </ul>
          </motion.div>

          {/* Section 16 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 border-l-4 border-gold-500 pl-4">16. Security Deposit Refund</h4>
            <p>
              Security deposit will be processed after trip completion and after checking for any RTO fines. 
              If any fine is found, it will be deducted and the remaining amount will be refunded.
            </p>
          </motion.div>

          {/* Section 17 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 border-l-4 border-gold-500 pl-4">17. Not Allowed</h4>
            <ul className="list-disc list-inside ml-4 space-y-1 mb-4">
              <li>Sub-renting the car to another person</li>
              <li>Carrying animals or pets</li>
              <li>Carrying unauthorized goods or materials</li>
              <li>Any illegal activities</li>
            </ul>
            <p>
              In case of any illegal activity, the person who booked the car and passengers will be fully 
              responsible for legal consequences.
            </p>
          </motion.div>

          {/* Section 18 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-gold-500/20 shadow-sm dark:shadow-none"
          >
            <h4 className="text-xl font-semibold text-gold-600 dark:text-gold-500 mb-3">18. Final Acceptance</h4>
            <p className="text-gray-700 dark:text-gray-300">
              By accepting the vehicle, you confirm that you have read, understood, and agreed to all the 
              terms and conditions mentioned above.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
