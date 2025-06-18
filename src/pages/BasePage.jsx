import React from "react";
import { Routes, Navigate, Route } from "react-router-dom";
import { Home, Dashboard, Deploy, User, Stack, Log, OpLog, Setting, CreateStack, Login, CreateDeploy, DeployLog } from ".";
import {AWS, GCP, Azure} from "../pages/authentication";

const BasePage = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
    );
};

export default BasePage;