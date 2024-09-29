import React, { useEffect, useState } from "react";
import "./rates.css";
import { useInView } from "react-intersection-observer";

const Rates = () => {
  const { ref, inView } = useInView({
    threshold: 0.5, // 70% of the element is visible
    triggerOnce: true, // Trigger only once
  });

  // Define state for the animated numbers
  const [happyCustomers, setHappyCustomers] = useState(0);
  const [worksCompleted, setWorksCompleted] = useState(0);
  const [expertMembers, setExpertMembers] = useState(0);
  const [satisfactionRate, setSatisfactionRate] = useState(0);

  // Load numbers when the component is in view
  const loadNumbers = () => {
    if (inView) {
      const targetHappyCustomers = 20; // 10K
      const targetWorksCompleted = 20; // 20+
      const targetExpertMembers = 20; // 20
      const targetSatisfactionRate = 100; // 100%

      // Animate happy customers
      const happyInterval = setInterval(() => {
        setHappyCustomers((prev) => {
          if (prev < targetHappyCustomers) {
            return prev + 1; // Increment by 100 until target is reached
          } else {
            clearInterval(happyInterval);
            return targetHappyCustomers;
          }
        });
      }, 50); // Update every 50ms

      // Animate works completed
      const worksInterval = setInterval(() => {
        setWorksCompleted((prev) => {
          if (prev < targetWorksCompleted) {
            return prev + 1; // Increment by 1 until target is reached
          } else {
            clearInterval(worksInterval);
            return targetWorksCompleted;
          }
        });
      }, 100); // Update every 100ms

      // Animate expert members
      const expertInterval = setInterval(() => {
        setExpertMembers((prev) => {
          if (prev < targetExpertMembers) {
            return prev + 1; // Increment by 1 until target is reached
          } else {
            clearInterval(expertInterval);
            return targetExpertMembers;
          }
        });
      }, 100); // Update every 100ms

      // Animate satisfaction rate
      const satisfactionInterval = setInterval(() => {
        setSatisfactionRate((prev) => {
          if (prev < targetSatisfactionRate) {
            return prev + 1; // Increment by 1 until target is reached
          } else {
            clearInterval(satisfactionInterval);
            return targetSatisfactionRate;
          }
        });
      }, 50); // Update every 50ms
    }
  };

  // Use useEffect to run loadNumbers when inView changes
  useEffect(() => {
    loadNumbers();
  }, [inView]);

  return (
    <div className="rates">
      <div ref={ref} className="container grid-3 rates-container">
        <div className="rate">
          <span>{happyCustomers}k+</span>
          <h2>HAPPY CUSTOMERS</h2>
        </div>
        <div className="rate">
          <span>{worksCompleted}+</span>
          <h2>WORKS COMPLETED</h2>
        </div>
        <div className="rate">
          <span>{expertMembers}</span>
          <h2>EXPERT MEMBERS</h2>
        </div>
        <div className="rate">
          <span>{satisfactionRate}%</span>
          <h2>SATISFACTION RATES</h2>
        </div>
      </div>
    </div>
  );
};

export default Rates;
