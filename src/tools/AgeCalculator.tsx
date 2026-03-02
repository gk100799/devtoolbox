"use client";

import { useState } from "react";

interface Age {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  totalDays: number;
  nextBirthdayDays: number;
}

function calculateAge(birthDate: string): Age | null {
  if (!birthDate) return null;
  const birth = new Date(birthDate);
  const now = new Date();
  if (birth > now) return null;

  let years = now.getFullYear() - birth.getFullYear();
  let months = now.getMonth() - birth.getMonth();
  let days = now.getDate() - birth.getDate();
  let hours = now.getHours() - birth.getHours();
  let minutes = now.getMinutes() - birth.getMinutes();

  if (minutes < 0) {
    hours--;
    minutes += 60;
  }
  if (hours < 0) {
    days--;
    hours += 24;
  }
  if (days < 0) {
    months--;
    days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  const totalDays = Math.floor((now.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24));

  const nextBirthday = new Date(now.getFullYear(), birth.getMonth(), birth.getDate());
  if (nextBirthday <= now) {
    nextBirthday.setFullYear(now.getFullYear() + 1);
  }
  const nextBirthdayDays = Math.ceil((nextBirthday.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

  return { years, months, days, hours, minutes, totalDays, nextBirthdayDays };
}

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("");
  const age = calculateAge(birthDate);

  return (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Enter your date of birth
        </label>
        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {birthDate && !age ? (
        <div className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg p-3">
          ❌ Please enter a date in the past.
        </div>
      ) : null}

      {age && (
        <>
          {/* Main stats */}
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
            {[
              { label: "Years", value: age.years },
              { label: "Months", value: age.months },
              { label: "Days", value: age.days },
              { label: "Hours", value: age.hours },
              { label: "Minutes", value: age.minutes },
            ].map(({ label, value }) => (
              <div key={label} className="bg-blue-50 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-blue-700">{value}</div>
                <div className="text-xs text-gray-600 mt-1">{label}</div>
              </div>
            ))}
          </div>

          {/* Detailed stats */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Total days lived</span>
              <span className="font-bold text-gray-900">{age.totalDays.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Days until next birthday</span>
              <span className="font-bold text-gray-900">{age.nextBirthdayDays}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
