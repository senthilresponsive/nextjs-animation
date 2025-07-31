"use client";

import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  TrashIcon,
  PlusIcon,
  CurrencyDollarIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

interface Role {
  id: string;
  department: string;
  headCount: number;
  hours: number;
  average: number;
}

const defaultRole: Role = {
  id: "0",
  department: "Sales",
  headCount: 3,
  hours: 8,
  average: 120,
};

const ROI_Calculator_Tap = () => {
  const [roles, setRoles] = useState<Role[]>([defaultRole]);
  const [saving, setSaving] = useState(40);
  const [rfpCount, setRfpCount] = useState(10);
  const [manualCost, setManualCost] = useState(0);
  const [automationCost, setAutomationCost] = useState(0);
  const [manualHours, setManualHours] = useState(0);
  const [automationHours, setAutomationHours] = useState(0);

  // NEW: Tab state
  const [activeTab, setActiveTab] = useState<"inputs" | "results">("inputs");

  const fadeIn = useSpring({
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(20px)" },
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("roiCalc");
      if (saved) {
        const parsed = JSON.parse(saved);
        setRoles(parsed.roles || [defaultRole]);
        setSaving(parsed.saving || 40);
        setRfpCount(parsed.rfpCount || 10);
      }
    }
  }, []);

  useEffect(() => {
    calculate();
    localStorage.setItem(
      "roiCalc",
      JSON.stringify({ roles, saving, rfpCount })
    );
  }, [roles, saving, rfpCount]);

  const calculate = () => {
    let cost = 0;
    let hours = 0;

    roles.forEach((r) => {
      cost += r.average * r.hours * r.headCount;
      hours += r.hours * r.headCount;
    });

    cost *= rfpCount;
    hours *= rfpCount;

    const automationCost = cost - (cost * saving) / 100;
    const automationHours = hours - (hours * saving) / 100;

    setManualCost(cost);
    setAutomationCost(Math.round(automationCost));
    setManualHours(hours);
    setAutomationHours(Math.round(automationHours));
  };

  const addRole = () => {
    const newRole: Role = {
      id: Date.now().toString(),
      department: "",
      headCount: 1,
      hours: 1,
      average: 100,
    };
    setRoles([...roles, newRole]);
  };

  const removeRole = (id: string) => {
    setRoles(roles.filter((r) => r.id !== id));
  };

  const updateRole = (id: string, field: keyof Role, value: string | number) => {
    setRoles(
      roles.map((r) =>
        r.id === id
          ? { ...r, [field]: field === "department" ? value : Number(value) }
          : r
      )
    );
  };

  const AnimatedNumber = ({
    number,
    prefix = "",
  }: {
    number: number;
    prefix?: string;
  }) => {
    const { num } = useSpring({
      num: number,
      from: { num: 0 },
      config: { tension: 120, friction: 14 },
    });
    return (
      <animated.span className="font-bold text-lg">
        {num.to((n) => `${prefix}${n.toFixed(0)}`)}
      </animated.span>
    );
  };

  const costData = [
    { name: "Cost", Manual: manualCost, Automation: automationCost },
  ];
  const hoursData = [
    { name: "Hours", Manual: manualHours, Automation: automationHours },
  ];

  return (
    <animated.div
      style={fadeIn}
      className="mt-12 p-6 space-y-10 max-w-5xl mx-auto bg-white rounded-xl pt-12 mb-12 shadow-lg border-t-4 border-gray-100"
    >
      <h1 className="text-3xl font-bold text-gray-800">ROI Calculator</h1>

      {/* Tabs */}
      <div className="flex gap-4 border-b mb-6">
        <button
          onClick={() => setActiveTab("inputs")}
          className={`px-4 py-2 font-semibold ${
            activeTab === "inputs"
              ? "border-b-4 border-pink-500 text-pink-600"
              : "text-gray-500 hover:text-pink-500"
          }`}
        >
          Inputs
        </button>
        <button
          onClick={() => setActiveTab("results")}
          className={`px-4 py-2 font-semibold ${
            activeTab === "results"
              ? "border-b-4 border-green-500 text-green-600"
              : "text-gray-500 hover:text-green-500"
          }`}
        >
          Results
        </button>
      </div>

      {/* ---------------------- INPUTS TAB ---------------------- */}
      {activeTab === "inputs" && (
        <div className="inputs-section">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">Inputs</h2>

          {/* Slider */}
          <div className="mb-6">
            <label className="block mb-2 font-medium text-gray-700">
              Automation Saving: {saving}%
            </label>
            <input
              type="range"
              min={0}
              max={100}
              value={saving}
              onChange={(e) => setSaving(Number(e.target.value))}
              className="w-full accent-pink-500"
            />
          </div>

          {/* RFP Count */}
          <div className="mb-6">
            <label className="block mb-2 font-medium text-gray-700">
              RFP Count per Year
            </label>
            <input
              type="number"
              value={rfpCount}
              onChange={(e) => setRfpCount(Number(e.target.value))}
              className="border border-gray-300 p-2 rounded-lg w-40 focus:ring-2 focus:ring-pink-400"
            />
          </div>

          {/* Role Table */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-3 text-left text-gray-700">Department</th>
                  <th className="p-3 text-left text-gray-700">Headcount</th>
                  <th className="p-3 text-left text-gray-700">Hours</th>
                  <th className="p-3 text-left text-gray-700">
                    Average $/Hour
                  </th>
                  <th className="p-3 text-left text-gray-700"></th>
                </tr>
              </thead>
              <tbody>
                {roles.map((role) => (
                  <tr key={role.id} className="border-t transition">
                    <td>
                      <input
                        value={role.department}
                        onChange={(e) =>
                          updateRole(role.id, "department", e.target.value)
                        }
                        className="border border-gray-300 p-1 rounded w-full"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={role.headCount}
                        onChange={(e) =>
                          updateRole(role.id, "headCount", e.target.value)
                        }
                        className="border border-gray-300 p-1 rounded w-full"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={role.hours}
                        onChange={(e) =>
                          updateRole(role.id, "hours", e.target.value)
                        }
                        className="border border-gray-300 p-1 rounded w-full"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={role.average}
                        onChange={(e) =>
                          updateRole(role.id, "average", e.target.value)
                        }
                        className="border border-gray-300 p-1 rounded w-full"
                      />
                    </td>
                    <td className="text-center">
                      <button
                        onClick={() => removeRole(role.id)}
                        className="p-1 rounded hover:bg-red-50"
                      >
                        <TrashIcon className="w-5 h-5 text-red-500" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button
            onClick={addRole}
            className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-5 py-2 rounded-lg shadow hover:scale-105 transition-transform"
          >
            <PlusIcon className="w-5 h-5" /> Add Role
          </button>
        </div>
      )}

      {/* ---------------------- RESULTS TAB ---------------------- */}
      {activeTab === "results" && (
        <div className="results-section">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Results
          </h2>

          {/* Animated Values */}
          <div className="space-y-3 text-lg text-gray-700 mb-6">
            <div className="flex items-center gap-2">
              <CurrencyDollarIcon className="w-6 h-6 text-green-600" />
              <AnimatedNumber
                number={manualCost - automationCost}
                prefix="$"
              />
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="w-6 h-6 text-blue-600" />
              <AnimatedNumber number={manualHours - automationHours} /> hrs
            </div>
          </div>

          {/* Charts */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Cost Chart */}
            <div>
              <h3 className="text-xl font-bold text-gray-700 mb-4 text-center">
                Cost Comparison
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={costData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Manual" fill="#d43376" />
                  <Bar dataKey="Automation" fill="#9cc83b" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Hour Chart */}
            <div>
              <h3 className="text-xl font-bold text-gray-700 mb-4 text-center">
                Hour Comparison
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={hoursData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Manual" fill="#d43376" />
                  <Bar dataKey="Automation" fill="#9cc83b" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}
    </animated.div>
  );
};

export default ROI_Calculator_Tap;
