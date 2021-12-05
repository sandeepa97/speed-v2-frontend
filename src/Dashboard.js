import React, { Component } from 'react'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1 className="m-0">Dashboard</h1>
                                </div>{/* /.col */}
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active">Dashboard</li>
                                    </ol>
                                </div>{/* /.col */}
                            </div>{/* /.row */}
                        </div>{/* /.container-fluid */}
                    </div>
                    {/* /.content-header */}
                    {/* Main content */}
                    <section className="content">
                        <div className="container-fluid">
                            {/* Info boxes */}
                            <div className="row">
                                <div className="col-12 col-sm-6 col-md-3">
                                    <div className="info-box">
                                        <span className="info-box-icon bg-info elevation-1"><i className="fas fa-cog" /></span>
                                        <div className="info-box-content">
                                            <span className="info-box-text">Current Tests</span>
                                            <span className="info-box-number">
                                                10
                                            </span>
                                        </div>
                                        {/* /.info-box-content */}
                                    </div>
                                    {/* /.info-box */}
                                </div>
                                {/* /.col */}
                                <div className="col-12 col-sm-6 col-md-3">
                                    <div className="info-box mb-3">
                                        <span className="info-box-icon bg-danger elevation-1"><i className="fas fa-thumbs-up" /></span>
                                        <div className="info-box-content">
                                            <span className="info-box-text">Total Service Numbers</span>
                                            <span className="info-box-number">100 000</span>
                                        </div>
                                        {/* /.info-box-content */}
                                    </div>
                                    {/* /.info-box */}
                                </div>
                                {/* /.col */}
                                {/* fix for small devices only */}
                                <div className="clearfix hidden-md-up" />
                                <div className="col-12 col-sm-6 col-md-3">
                                    <div className="info-box mb-3">
                                        <span className="info-box-icon bg-success elevation-1"><i className="fas fa-shopping-cart" /></span>
                                        <div className="info-box-content">
                                            <span className="info-box-text">Good Speed</span>
                                            <span className="info-box-number">95 <small>%</small></span>
                                        </div>
                                        {/* /.info-box-content */}
                                    </div>
                                    {/* /.info-box */}
                                </div>
                                {/* /.col */}
                                <div className="col-12 col-sm-6 col-md-3">
                                    <div className="info-box mb-3">
                                        <span className="info-box-icon bg-warning elevation-1"><i className="fas fa-users" /></span>
                                        <div className="info-box-content">
                                            <span className="info-box-text">New Customers</span>
                                            <span className="info-box-number">2 000</span>
                                        </div>
                                        {/* /.info-box-content */}
                                    </div>
                                    {/* /.info-box */}
                                </div>
                                {/* /.col */}
                            </div>
                            {/* /.row */}
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="card-title">Monthly Speed Analysis</h5>
                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                    <i className="fas fa-minus" />
                                                </button>
                                                <button type="button" className="btn btn-tool" data-card-widget="remove">
                                                    <i className="fas fa-times" />
                                                </button>
                                            </div>
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-8">
                                                    <p className="text-center">
                                                        <strong>1 Nov, 2021 - 30 Nov, 2021</strong>
                                                    </p>
                                                    <div className="chart">
                                                        {/* Sales Chart Canvas */}
                                                        <canvas id="salesChart" height={180} style={{ height: 180 }} />
                                                    </div>
                                                    {/* /.chart-responsive */}
                                                </div>
                                                {/* /.col */}
                                                <div className="col-md-4">
                                                    <p className="text-center">
                                                        <strong>Test Completion</strong>
                                                    </p>
                                                    <div className="progress-group">
                                                        100M
                                                        <span className="float-right"><b>160</b>/200</span>
                                                        <div className="progress progress-sm">
                                                            <div className="progress-bar bg-success" style={{ width: '80%' }} />
                                                        </div>
                                                    </div>
                                                    {/* /.progress-group */}
                                                    <div className="progress-group">
                                                        50M
                                                        <span className="float-right"><b>310</b>/400</span>
                                                        <div className="progress progress-sm">
                                                            <div className="progress-bar bg-danger" style={{ width: '75%' }} />
                                                        </div>
                                                    </div>
                                                    {/* /.progress-group */}
                                                    <div className="progress-group">
                                                        <span className="progress-text">25M</span>
                                                        <span className="float-right"><b>480</b>/800</span>
                                                        <div className="progress progress-sm">
                                                            <div className="progress-bar bg-primary" style={{ width: '60%' }} />
                                                        </div>
                                                    </div>
                                                    {/* /.progress-group */}
                                                    <div className="progress-group">
                                                        12M
                                                        <span className="float-right"><b>250</b>/500</span>
                                                        <div className="progress progress-sm">
                                                            <div className="progress-bar bg-warning" style={{ width: '50%' }} />
                                                        </div>
                                                    </div>
                                                    {/* /.progress-group */}
                                                </div>
                                                {/* /.col */}
                                            </div>
                                            {/* /.row */}
                                        </div>
                                        {/* ./card-body */}
                                    </div>
                                    {/* /.card */}
                                </div>
                                {/* /.col */}
                            </div>
                            {/* /.row */}
                            {/* Main row */}
                            <div className="row">
                                {/* Left col */}
                                <div className="col-md-8">
                                    {/* MAP & BOX PANE */}
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">States Speed Analysis</h3>
                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                    <i className="fas fa-minus" />
                                                </button>
                                                <button type="button" className="btn btn-tool" data-card-widget="remove">
                                                    <i className="fas fa-times" />
                                                </button>
                                            </div>
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body p-0">
                                            <div className="d-md-flex">
                                                <div className="p-1 flex-fill" style={{ overflow: 'hidden' }}>
                                                    {/* Map will be created here */}
                                                    <div id="world-map-markers" style={{ height: 325, overflow: 'hidden' }}>
                                                        <div className="map" />
                                                    </div>
                                                </div>
                                                <div className="card-pane-right bg-success pt-2 pb-2 pl-4 pr-4">
                                                    <div className="description-block mb-4">
                                                        <div className="sparkbar pad" data-color="#fff">90,70,90,70,75,80,70</div>
                                                        <h5 className="description-header">8390</h5>
                                                        <span className="description-text">Tests</span>
                                                    </div>
                                                    {/* /.description-block */}
                                                    <div className="description-block mb-4">
                                                        <div className="sparkbar pad" data-color="#fff">90,50,90,70,61,83,63</div>
                                                        <h5 className="description-header">95%</h5>
                                                        <span className="description-text">Good Speed</span>
                                                    </div>
                                                    {/* /.description-block */}
                                                    <div className="description-block">
                                                        <div className="sparkbar pad" data-color="#fff">90,50,90,70,61,83,63</div>
                                                        <h5 className="description-header">5%</h5>
                                                        <span className="description-text">Average Speed</span>
                                                    </div>
                                                    {/* /.description-block */}
                                                </div>{/* /.card-pane-right */}
                                            </div>{/* /.d-md-flex */}
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}

                                    {/* TABLE: LATEST ORDERS */}
                                    <div className="card">
                                        <div className="card-header border-transparent">
                                            <h3 className="card-title">ZTE Speedtests</h3>
                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                    <i className="fas fa-minus" />
                                                </button>
                                                <button type="button" className="btn btn-tool" data-card-widget="remove">
                                                    <i className="fas fa-times" />
                                                </button>
                                            </div>
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body p-0">
                                            <div className="table-responsive">
                                                <table className="table m-0">
                                                    <thead>
                                                        <tr>
                                                            <th>Order ID</th>
                                                            <th>Item</th>
                                                            <th>Status</th>
                                                            <th>Popularity</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><a href="pages/examples/invoice.html">OR9842</a></td>
                                                            <td>Call of Duty IV</td>
                                                            <td><span className="badge badge-success">Shipped</span></td>
                                                            <td>
                                                                <div className="sparkbar" data-color="#00a65a" data-height={20}>90,80,90,-70,61,-83,63</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href="pages/examples/invoice.html">OR1848</a></td>
                                                            <td>Samsung Smart TV</td>
                                                            <td><span className="badge badge-warning">Pending</span></td>
                                                            <td>
                                                                <div className="sparkbar" data-color="#f39c12" data-height={20}>90,80,-90,70,61,-83,68</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href="pages/examples/invoice.html">OR7429</a></td>
                                                            <td>iPhone 6 Plus</td>
                                                            <td><span className="badge badge-danger">Delivered</span></td>
                                                            <td>
                                                                <div className="sparkbar" data-color="#f56954" data-height={20}>90,-80,90,70,-61,83,63</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href="pages/examples/invoice.html">OR7429</a></td>
                                                            <td>Samsung Smart TV</td>
                                                            <td><span className="badge badge-info">Processing</span></td>
                                                            <td>
                                                                <div className="sparkbar" data-color="#00c0ef" data-height={20}>90,80,-90,70,-61,83,63</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href="pages/examples/invoice.html">OR1848</a></td>
                                                            <td>Samsung Smart TV</td>
                                                            <td><span className="badge badge-warning">Pending</span></td>
                                                            <td>
                                                                <div className="sparkbar" data-color="#f39c12" data-height={20}>90,80,-90,70,61,-83,68</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href="pages/examples/invoice.html">OR7429</a></td>
                                                            <td>iPhone 6 Plus</td>
                                                            <td><span className="badge badge-danger">Delivered</span></td>
                                                            <td>
                                                                <div className="sparkbar" data-color="#f56954" data-height={20}>90,-80,90,70,-61,83,63</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href="pages/examples/invoice.html">OR9842</a></td>
                                                            <td>Call of Duty IV</td>
                                                            <td><span className="badge badge-success">Shipped</span></td>
                                                            <td>
                                                                <div className="sparkbar" data-color="#00a65a" data-height={20}>90,80,90,-70,61,-83,63</div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            {/* /.table-responsive */}
                                        </div>
                                        {/* /.card-body */}
                                        <div className="card-footer clearfix">
                                            <a href="javascript:void(0)" className="btn btn-sm btn-info float-left">Import</a>
                                            <a href="javascript:void(0)" className="btn btn-sm btn-secondary float-right">View All</a>
                                        </div>
                                        {/* /.card-footer */}
                                    </div>
                                    {/* /.card */}
                                </div>
                                {/* /.col */}
                                <div className="col-md-4">
                                    {/* Info Boxes Style 2 */}
                                    <div className="info-box mb-3 bg-warning">
                                        <span className="info-box-icon"><i className="fas fa-tag" /></span>
                                        <div className="info-box-content">
                                            <span className="info-box-text">Average Speed</span>
                                            <span className="info-box-number">92,050</span>
                                        </div>
                                        {/* /.info-box-content */}
                                    </div>
                                    {/* /.info-box */}
                                    <div className="info-box mb-3 bg-success">
                                        <span className="info-box-icon"><i className="fas fa-tag" /></span>
                                        <div className="info-box-content">
                                            <span className="info-box-text">Good Speed</span>
                                            <span className="info-box-number">1,050</span>
                                        </div>
                                        {/* /.info-box-content */}
                                    </div>
                                    {/* /.info-box */}
                                    <div className="info-box mb-3 bg-info">
                                        <span className="info-box-icon"><i className="fas fa-tag" /></span>
                                        <div className="info-box-content">
                                            <span className="info-box-text">Low Speed</span>
                                            <span className="info-box-number">921</span>
                                        </div>
                                        {/* /.info-box-content */}
                                    </div>
                                    {/* /.info-box */}
                                    <div className="info-box mb-3 bg-danger">
                                        <span className="info-box-icon"><i className="fas fa-cloud-download-alt" /></span>
                                        <div className="info-box-content">
                                            <span className="info-box-text">Downloadable Reports</span>
                                            <span className="info-box-number">56</span>
                                        </div>
                                        {/* /.info-box-content */}
                                    </div>
                                    {/* /.info-box */}
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Browser Usage</h3>
                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                    <i className="fas fa-minus" />
                                                </button>
                                                <button type="button" className="btn btn-tool" data-card-widget="remove">
                                                    <i className="fas fa-times" />
                                                </button>
                                            </div>
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-8">
                                                    <div className="chart-responsive">
                                                        <canvas id="pieChart" height={150} />
                                                    </div>
                                                    {/* ./chart-responsive */}
                                                </div>
                                                {/* /.col */}
                                                <div className="col-md-4">
                                                    <ul className="chart-legend clearfix">
                                                        <li><i className="far fa-circle text-danger" /> Chrome</li>
                                                        <li><i className="far fa-circle text-success" /> IE</li>
                                                        <li><i className="far fa-circle text-warning" /> FireFox</li>
                                                        <li><i className="far fa-circle text-info" /> Safari</li>
                                                        <li><i className="far fa-circle text-primary" /> Opera</li>
                                                        <li><i className="far fa-circle text-secondary" /> Navigator</li>
                                                    </ul>
                                                </div>
                                                {/* /.col */}
                                            </div>
                                            {/* /.row */}
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                </div>
                                {/* /.col */}
                            </div>
                            {/* /.row */}
                        </div>{/*/. container-fluid */}
                    </section>
                    {/* /.content */}
                </div>
            </div>

        )
    }
}
