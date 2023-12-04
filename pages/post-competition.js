import Layout from "/components/layout/Layout"

export default function Home() {
    return (
        <>
            <Layout breadcrumbTitle="My Profile" breadcrumbActive="My Profile">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-box">
                        <div className="container">
                            <div className="panel-white mb-30">
                            <div className="box-padding bg-postjob">
                                <h5 className="icon-edu">Upload Competition</h5>
                                <div className="row mt-30">
                                <div className="col-lg-9">
                                    <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group mb-30">
                                        <label className="font-sm color-text-mutted mb-10">
                                            Competition title 
                                        </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="e.g. Senior Product Designer"
                                        />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group mb-30">
                                        <label className="font-sm color-text-mutted mb-10">
                                            Add Competition description 
                                        </label>
                                        <textarea
                                            className="form-control"
                                            name="message"
                                            rows={8}
                                            defaultValue={
                                            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at sem id enim suscipit commodo nec in ante. Sed viverra vel leo vitae pharetra. Morbi viverra venenatis neque, eu porttitor diam blandit nec. Etiam et volutpat magna, id molestie quam. Vestibulum vel libero gravida, scelerisque arcu eu, maximus mi. Suspendisse eu dolor lobortis, posuere enim venenatis, posuere quam.\n\n                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at sem id enim suscipit commodo nec in ante. Sed viverra vel leo vitae pharetra. Morbi viverra venenatis neque, eu porttitor diam blandit nec. Etiam et volutpat magna, id molestie quam. Vestibulum vel libero gravida, scelerisque arcu eu, maximus mi. Suspendisse eu dolor lobortis, posuere enim venenatis, posuere quam."
                                            }
                                        />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group mb-30">
                                        <label className="font-sm color-text-mutted mb-10">
                                            Job location
                                        </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder='e.g. '
                                        />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group mb-30">
                                        <label className="font-sm color-text-mutted mb-10">
                                            Competition location 
                                        </label>
                                        <select className="form-control">
                                            <option value={1}>Remote</option>
                                            <option value={1}>Office</option>
                                        </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group mb-30">
                                        <label className="font-sm color-text-mutted mb-10">
                                            fee 
                                        </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="$/Free"
                                        />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group mb-30">
                                        <label className="font-sm color-text-mutted mb-10">
                                            Skill Type 
                                        </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Red, Blue "
                                        />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group mb-30">
                                        <div className="box-upload">
                                            <div className="add-file-upload">
                                            <input
                                                className="fileupload"
                                                type="file"
                                                name="file"
                                            />
                                            </div>
                                            <a className="btn btn-default">Upload Logo</a>
                                        </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12">
                                        <div className="form-group mt-10">
                                        <button className="btn btn-default btn-brand icon-tick">
                                            Post
                                        </button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}